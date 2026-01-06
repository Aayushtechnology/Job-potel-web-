const Roter = require('express').Router();
const { registerUser, loginuser } = require('../Controller/UserContrellor');

Roter.post("/register", registerUser)
Roter.post('/login', loginuser)

module.exports = Roter;