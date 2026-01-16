const { DataTypes } = require("sequelize");

const { sequelize } = require("../db/dbcomfig");



const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ['jobseeker', 'jobprovider'],
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: 'users', // 👈 important

},);

module.exports = User;
