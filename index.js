const express = require('express');
const router = express.Router();
const userData = require('./data').router;
const doctor = require('./doctor');
const appointment = require('./appointment');

router.use('/user-data',userData);
router.use('/doctor',doctor);
router.use('/appointment',appointment);

module.exports = router;