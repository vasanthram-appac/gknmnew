var express = require('express');
const { Login } = require('../Controller/Adminuser');
const { getreport, addDoctor, updateDoctor } = require('../Controller/Doctor');  // Assuming updateDoctor is implemented

var router = express.Router();

// Login route
router.route('/login').post(Login);

router.route('/doctor')  
  .get(getreport)        
  .post(addDoctor);      

router.route('/doctor/:id')  
  .put(updateDoctor); 
       
module.exports = router;
