const { createjob, getjobs, getsinglejob, updateJobById, deleteJobById } = require('../Controller/JobController');

const Router = require('express').Router();

Router.post('/job', createjob).get("/job", getjobs)
Router.get('/job/:id', getsinglejob).put('/job/:id', updateJobById).delete('/job/:id', deleteJobById)
module.exports = Router;