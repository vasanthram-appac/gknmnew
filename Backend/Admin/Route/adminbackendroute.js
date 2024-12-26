var express = require('express');
const { Login } = require('../Controller/Adminuser');
const { getreport, addDoctor } = require('../Controller/Doctor');

var router = express.Router();
// router.route('/login').get(getLogin);

router.route('/login').post(Login);

router.route('/doctor').get(getreport);

router.route('/doctor').post(addDoctor).get(getreport);


// Route to update a specific report by ID

module.exports = router;


