const { Job, User } = require("../Model/index");
console.log("job controller loaded");
const createjob = async (req, res) => {
    // get data from req.body
    console.log(" api hit");
    const { title, description, location, salary, company } = req.body;
console.log(req.body)
    if (!title || !description || !location || !company) {
        return res.status(400).json({ message: "Please provide all required fields" })
    }
/// create 
    const job = await Job.create({
        title,
        description,
        location,
        salary,
        company
    })

    res.status(201).json({ message: "Job created successfully", job })
}

// get a jobs
const getjobs = async (req, res) => {

    // fetch jobs from db
    const jobs = await Job.findAll({
        // include user details
        include: {
            model: User,
            attributes: ["id", "username", "userEmail"]
        }
    });
    if (!jobs) {
        return res.status(404).json({ message: "No jobs found" })
    }
    res.status(200).json({
        message: "Jobs fetched successfully",
        jobs
    })
}

const getsinglejob = async (req, res) => {
    // get id from req.params
    // what is req.params?
    // It is used to get the dynamic value from the url
    const id = req.params.id
    if (!id) {
        return res.status(400).json({
            message: "Job id is required"
        })
    }

    // fetch job from db
    const job = await Job.findByPk(id, {
        include: {
            model: User,
            attributes: ["id", "username", "userEmail"]
        }
    }) // returns single object/null
    if (!job) {
        return res.status(400).json({
            message: "Job not found"
        })
    }
    return res.status(200).json({
        message: "Job fetched successfully",
        data: job
    })
}
// update job by id
const updateJobById = async (req, res) => {
    const id = req.params.id;
    const { jobTitle, jobDescription, jobLocation, jobSalary, jobCompany } = req.body

    // check req.body

    if (!jobTitle || !jobDescription || !jobLocation || !jobSalary || !jobCompany) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    // Check if job exists
    const job = await Job.findOne({ where: { id } }) // returns single object/null

    if (!job) {
        return res.status(400).json({
            message: "Job not found"
        })
    }

    // Update job

    await Job.update({
        jobTitle,
        jobDescription,
        jobLocation,
        jobSalary,
        jobCompany
    }, { where: { id } }
    )
    const jobs = await Job.findByPk(id, {
        include: {
            model: User,
            attributes: ["id", "username", "userEmail"]
        }
    })
    return res.status(200).json({
        message: "Job updated successfully",
        data: jobs
    })
}


// delete job by id
const deleteJobById = async (req, res) => {
    const id = req.params.id

    // Check if job exists
    const job = await Job.findOne({ where: { id } })
    if (!job) {
        return res.status(400).json({
            message: "Job not found"
        })
    }

    // Delete job
    await Job.destroy({ where: { id } })
    return res.status(200).json({
        message: "Job deleted successfully"
    })
}


// exports 
module.exports = { createjob, getjobs, getsinglejob, updateJobById,deleteJobById }