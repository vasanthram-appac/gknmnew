var express = require('express');
const { Login } = require('../Controller/Adminuser');
const { getreport, addDoctor, updateDoctor, deleteDoctor, deleteDoctordetail } = require('../Controller/Doctor');  // Assuming updateDoctor is implemented
const { getSpecialities, addSpecialities, updateSpecialities, deleteSpecialities } = require('../Controller/Specialities');
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

  router.route('/specialities')  
  .get(getSpecialities)        
  .post(addSpecialities);      

router.route('/specialities/:id')  
  .put(updateSpecialities).delete(deleteSpecialities);
       
module.exports = router;
