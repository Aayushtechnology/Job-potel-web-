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

const updateApplicationStatus = async (req, res) => {
    const { applicationId } = req.params;
    const { status } = req.body;

     const application = await Application.findByPk(applicationId);

     if(!application) {
        return res.status(404).json({
            message: "Application not found"
        })
     }

     // update status
        application.status = status;
        await application.save();

        return res.status(200).json({
            message: "Application status updated successfully",
            application
        })
}

