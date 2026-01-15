const Roter = require('express').Router();
const { registerUser, loginuser } = require('../Controller/UserContrellor');
const catchAsync = require('../service/CatchAsync');

Roter.post("/register", registerUser)
Roter.post('/login', catchAsync ,loginuser)


module.exports = Roter;