const { createjob, getjobs, getsinglejob, updateJobById, deleteJobById } = require('../Controller/JobController');
const { isAuthenticated, checkUserRole } = require('../middware/usermiddware');
const catchAsync = require('../service/CatchAsync');

const Router = require('express').Router();

Router.post('/job', catchAsync, createjob).get("/job", isAuthenticated, catchAsync, getjobs)
Router.get('/job/:id', catchAsync, getsinglejob).put('/job/:id', catchAsync, updateJobById).delete('/job/:id', catchAsync, deleteJobById)

module.exports = Router;
console.log("job route loaded");