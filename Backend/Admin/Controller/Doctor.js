var Doctormodel = require('../../Model/Doctormodel');

// GET method to retrieve reports
exports.getreport = async (req, res, next) => {
  try {
    const data = await Doctormodel.find({}, { id: 1, name: 1, qualification: 1, department: 1, status: 1 }); // Select specific fields
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


const { body, validationResult } = require("express-validator");
const { move } = require('../Route/adminbackendroute');

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

  // Image: optional, but if provided, must be a valid URL and an image format
  body("image")
    .optional({ checkFalsy: true }) // Allows empty string, but validates if provided
    .matches(/\.(jpeg|jpg|gif|png|webp)$/i).withMessage("Image must be a valid image format (jpeg, jpg, gif, png, webp)"),

  // New OP Days: optional, but if provided, must be numeric
  body("new_op")
    .optional({ checkFalsy: true }) // Allows empty string, but validates if provided
    .isNumeric().withMessage("New OP Days must be a number"),

  // Review OP Days: optional, but if provided, must be numeric
  body("review_op")
    .optional({ checkFalsy: true }) // Allows empty string, but validates if provided
    .isNumeric().withMessage("Review OP Days must be a number"),

  // Experience: optional, but if provided, must be numeric
  body("experience")
    .optional({ checkFalsy: true }) // Allows empty string, but validates if provided
    .isNumeric().withMessage("Experience must be a valid number"),

  body("expertise")
    .optional({ checkFalsy: true }) 
    .notEmpty().withMessage("Expertise is required"),
];

// Controller
exports.addDoctor = [
  validateDoctor,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    try {
      const newDoctor = new Doctormodel(req.body); // Correct model name

      if(!empty(newDoctor.image)){

        dir='frontend/public/doctor'

        if dir not found need to create  after move the image path save in table 


      }

      const savedDoctor = await newDoctor.save();
      res.json({ msg: "Doctor added successfully", data: savedDoctor });
    } catch (err) {
      res.status(500).json({ msg: "Error adding doctor", error: err.message });
    }
  },
];





