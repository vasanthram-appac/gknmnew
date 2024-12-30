const Doctormodel = require('../../Model/Doctormodel');
const Doctordetailmodel = require('../../Model/Doctordetailmodel');
const { body, validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');

// Validation middleware
const validateDoctor = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .matches(/^[A-Za-z\s.]+$/).withMessage("Name must only contain letters, spaces, and periods"),

  body("status")
    .notEmpty().withMessage("Status is required")
    .isIn(["Active", "Inactive"]).withMessage("Status must be either 'Active' or 'Inactive'"),

  body("qualification")
    .notEmpty().withMessage("Qualification is required"),

  body("department")
    .notEmpty().withMessage("Department is required"),

  body("image")
    .optional({ checkFalsy: true })
    .notEmpty().withMessage("Image must be a valid image format (webp)"),

  body("new_op")
    .optional({ checkFalsy: true })
    .notEmpty().withMessage("New OP is required"),

  body("review_op")
    .optional({ checkFalsy: true })
    .notEmpty().withMessage("Review OP is required"),

  body("experience")
    .optional({ checkFalsy: true })
    .notEmpty().withMessage("Experience is required"),

  body("expertise")
    .optional({ checkFalsy: true })
    .notEmpty().withMessage("Expertise is required"),
];

// GET method to retrieve reports
exports.getreport = async (req, res, next) => {
  try {
    const data = await Doctormodel.aggregate([
      {
        $project: {
          id: 1,
          name: 1,
          qualification: 1,
          department: 1,
          new_op: 1,
          review_op: 1,
          experience: 1,
          expertise: 1,
          languages: 1,
          status: 1,
        },
      },
      {
        $lookup: {
          from: "doctordetails", // Correct collection name (pluralized, lowercase)
          localField: "id",  // Local field (in Doctormodel)
          foreignField: "dr_id",  // Foreign field (in Doctordetailmodel)
          as: "doctordetails",  // The result will be stored in "doctordetails"
        },
      },
      {
        $addFields: {
          doctordetails: {
            $arrayToObject: {
              $map: {
                input: { $range: [0, { $size: "$doctordetails" }] }, // Generate range of indices
                as: "index",
                in: [
                  { $toString: "$$index" }, // Convert index to string (to match output format)
                  { $arrayElemAt: ["$doctordetails", "$$index"] } // Get the object at the index
                ]
              }
            }
          }
        }
      },
      {
        $project: {
          id: 1,
          name: 1,
          qualification: 1,
          department: 1,
          new_op: 1,
          review_op: 1,
          experience: 1,
          expertise: 1,
          languages: 1,
          status: 1,
          doctordetails: 1,
        },
      }
    ]);

    res.json({
      msg: 'Report retrieved successfully',
      data,
    });
  } catch (error) {
    res.status(404).json({
      msg: 'Report not retrieved',
      error: error.message,
    });
  }
};

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

exports.addDoctor = [
  upload.single('image'),  // Handle file upload
  validateDoctor,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    try {
      const { body, file } = req;
      const newDoctor = new Doctormodel(body);

      // Check if file exists in the request
      if (file) {
        // Validate file type and size
        if (!/\.(webp)$/i.test(file.originalname)) {
          return res.status(400).json({ msg: 'Invalid file format. Only .webp images are allowed.' });
        }

        // Ensure the upload directory exists
        const uploadDir = path.join(__dirname, '../../frontend/public/images/doctor');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        // Define the path where the file will be saved
        const imagePath = path.join(uploadDir, file.filename);

        // Move the file to the upload directory 
        fs.renameSync(file.path, imagePath);

        // Save the relative path of the image in the database
        newDoctor.image = `/images/doctor/${file.filename}`;
      }

      // Save the new doctor to the database
      const savedDoctor = await newDoctor.save();

      // Handle dynamic fields
      if (body.dynamicFields) {
        const dynamicFields = JSON.parse(body.dynamicFields);
        for (const field of dynamicFields) {
          const newDetail = new Doctordetailmodel({
            dr_id: savedDoctor.id,
            title: field.title,
            content: field.content,
            titlestatus: field.titlestatus,
          });
          await newDetail.save();
        }
      }


      res.json({ msg: 'Doctor added successfully', data: savedDoctor });
    } catch (err) {
      console.error('Error adding doctor:', err);
      res.status(500).json({ msg: 'Error adding doctor', error: err.message });
    }
  },
];

exports.updateDoctor = [
  upload.single('image'),
  validateDoctor,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    try {
      const { body, file } = req;
      const { id } = req.params;

      // Find the doctor to update
      const doctor = await Doctormodel.findOne({ id });
      if (!doctor) {
        return res.status(404).json({ msg: 'Doctor not found' });
      }

      // Update fields from the request body
      Object.assign(doctor, body);

      // Check if a new file is provided
      if (file) {
        // Validate file type and size
        if (!/\.(webp)$/i.test(file.originalname)) {
          return res.status(400).json({ msg: 'Invalid file format. Only .webp images are allowed.' });
        }

        // Ensure the upload directory exists
        const uploadDir = path.join(__dirname, '../../frontend/public/images/doctor');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Define the path where the file will be saved
        const imagePath = path.join(uploadDir, file.filename);

        // Move the file to the upload directory
        fs.renameSync(file.path, imagePath);

        // Optionally delete the old image file
        if (doctor.image) {
          const oldImagePath = path.join(__dirname, '../../frontend/public', doctor.image);
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }

        // Save the relative path of the new image in the database
        doctor.image = `/images/doctor/${file.filename}`;
      }

      // Save the updated doctor to the database
      const updatedDoctor = await doctor.save();

      if (body.dynamicFields) {
        const dynamicFields = JSON.parse(body.dynamicFields);
        for (const field of dynamicFields) {
          const doctordetails = await Doctordetailmodel.findOne({ id: field.editid });

          if (doctordetails) {

            doctordetails.title = field.title;
            doctordetails.content = field.content;
            doctordetails.titlestatus = field.titlestatus;

            await doctordetails.save();
          } else {
            const newDetail = new Doctordetailmodel({
              dr_id: updatedDoctor.id,
              title: field.title,
              content: field.content,
              titlestatus: field.titlestatus,
            });
            await newDetail.save();
          }
        }
      }

      res.json({ msg: 'Doctor updated successfully', data: updatedDoctor });
    } catch (err) {
      console.error('Error editing doctor:', err);
      res.status(500).json({ msg: 'Error editing doctor', error: err.message });
    }
  },
];

exports.deleteDoctor = async (req, res) => {
  const { id } = req.params; // Get doctor ID from the route parameter

  try {
    // Find and delete the doctor by ID
    const doctor = await Doctormodel.findOneAndDelete({ id: id });

    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }

    res.json({ msg: 'Doctor deleted successfully', data: doctor });
  } catch (err) {
    console.error('Error deleting doctor:', err);
    res.status(500).json({ msg: 'Error deleting doctor', error: err.message });
  }
};


exports.deleteDoctordetail = async (req, res) => {
  const { id } = req.params; // Get doctor ID from the route parameter

  try {
    // Find and delete the doctor by ID
    const doctor = await Doctordetailmodel.findOneAndDelete({ id: id });

    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor detail not found' });
    }

    res.json({ msg: 'Doctor detail deleted successfully', data: doctor });
  } catch (err) {
    console.error('Error deleting doctor:', err);
    res.status(500).json({ msg: 'Error deleting doctor', error: err.message });
  }
};

