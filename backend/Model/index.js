const User = require("../Model/UserModel");
const Job = require("../Model/jobmodel");


User.hasMany(Job, { foreignKey: 'userId' });
Job.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Job };