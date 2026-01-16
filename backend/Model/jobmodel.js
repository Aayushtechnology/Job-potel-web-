const { DataTypes } = require("sequelize");

const { sequelize } = require("../db/dbcomfig");

// define is method 
const Job = sequelize.define("Job", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.STRING,
        allowNull: true
    },

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
    },

}, {
    timestamps: true,
    underscored: true,
    tableName: 'jobs',
})

module.exports = Job;
console.log("job model loaded");