const { Job, User, Application } = require("../Model/index")


// create apply job 
const applyjob = async (req, res) => {
    const { status } = req.body;
    // data haru url auuxa vane params bata lina parxa
    const { jobId } = req.params;
    const userId = req.user.id;

    // check if job exists
    const job = await Job.findByPk(jobId);
    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        })
    }

    const application = await Application.create({
        jobId,
        userId,
        status: status
    })

    return res.status(201).json({
        message: "Job applied successfully",
        application
    })
}
module.exports = {
    applyjob
}

