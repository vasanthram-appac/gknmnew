const Doctormodel = require('../../Model/Doctormodel');
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
    .matches(/\.(webp)$/i).withMessage("Image must be a valid image format (webp)"),

  body("new_op")
    .optional({ checkFalsy: true })
    .isNumeric().withMessage("New OP Days must be a number"),

  body("review_op")
    .optional({ checkFalsy: true })
    .isNumeric().withMessage("Review OP Days must be a number"),

  body("experience")
    .optional({ checkFalsy: true })
    .isNumeric().withMessage("Experience must be a valid number"),

  body("expertise")
    .optional({ checkFalsy: true })
    .notEmpty().withMessage("Expertise is required"),
];

// GET method to retrieve reports
exports.getreport = async (req, res, next) => {
  try {
    const data = await Doctormodel.find({}, { id: 1, name: 1, qualification: 1, department: 1, status: 1 });
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
      res.json({ msg: 'Doctor added successfully', data: savedDoctor });
    } catch (err) {
      console.error('Error adding doctor:', err);
      res.status(500).json({ msg: 'Error adding doctor', error: err.message });
    }
  },
];

// In Controller/Doctor.js
exports.updateDoctor = async (req, res) => {
  const { id } = req.params; // Get the ID from the URL parameter
  const { body } = req;
 
  try {
    const doctor = await Doctormodel.findByIdAndUpdate(id, body, { new: true });
    
    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }

    res.json({
      msg: 'Doctor updated successfully',
      data: doctor
    });
  } catch (err) {
    res.status(500).json({ msg: 'Error updating doctor', error: err.message });
  }
};
