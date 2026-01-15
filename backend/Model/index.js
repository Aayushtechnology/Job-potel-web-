const Application = require("../Model/UserModel");
const User = require("../Model/UserModel");
const Job = require("../Model/jobmodel");


User.hasMany(Job, { foreignKey: 'userId' });
Job.belongsTo(User, { foreignKey: 'userId' });

// Relationships between User and Application
User.hasMany(Application, { foreignKey: "userId" })
Application.belongsTo(User, { foreignKey: "userId" })

// Relationships between Job and Application
Job.hasMany(Application, { foreignKey: "jobId" })
Application.belongsTo(Job, { foreignKey: "jobId" })

module.exports = { User, Job,
    Application

 };