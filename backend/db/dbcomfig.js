const  Sequelize = require('sequelize');
require('dotenv').config();



const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});


const connectDb = async () => {
    try {
        await sequelize.authenticate();

        await sequelize.sync({ alter: false, force: false });

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
module.exports.sequelize = sequelize;
module.exports.connectDB = connectDb;
// module.exports.sequelize = sequelize;


