const Roter = require('express').Router();
const { createjob, getjobs, getjobById, updateJobById, deleteJobById } = require('../Controller/JobController');
const { registerUser, loginuser } = require('../Controller/UserContrellor');

Roter.post("/register", registerUser)
Roter.post('/login', loginuser)


module.exports = Roter;