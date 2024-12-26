var Doctormodel = require('../../Model/Doctormodel');

// GET method to retrieve reports
exports.getreport = async (req, res, next) => {
  try {
    const data = await Doctormodel.find({}, { id: 1, name: 1, status: 1 }); // Select specific fields
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


