const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbcomfig");

const Application = sequelize.define("Applicationn", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('applied', 'in review', 'rejected', 'accepted'),
        defaultValue: 'applied',
        allowNull: false

    },
    applieAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false

    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    jobId: {
        type: DataTypes.UUIDR,
        allowNull: false
    }

}, {
    timestamps: false,
    tableName: "applications"
})

module.exports = Application;