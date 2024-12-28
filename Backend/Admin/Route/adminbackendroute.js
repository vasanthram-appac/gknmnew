var express = require('express');
const { Login } = require('../Controller/Adminuser');
const { getreport, addDoctor, updateDoctor, deleteDoctor, deleteDoctordetail } = require('../Controller/Doctor');  // Assuming updateDoctor is implemented

var router = express.Router();

// Login route
router.route('/login').post(Login);

router.route('/doctor')  
  .get(getreport)        
  .post(addDoctor);      

router.route('/doctor/:id')  
  .put(updateDoctor).delete(deleteDoctor);

  router.route('/doctordetail/:id')  
  .delete(deleteDoctordetail);
       
module.exports = router;
