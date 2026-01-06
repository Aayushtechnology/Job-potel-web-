const { Job } = require("../Model/index")

const createjob = async (req, res) => {
    const { title, description, location, salary } = req.body;

    if (!title || !description || !location) {
        return res.status(400).json({ message: "Please provide all required fields" })
    }

    const job = await Job.create({
        title,
        description,
        location,
        salary
    })

    res.status(201).json({ message: "Job created successfully", job })
}

module.exports = { createjob }