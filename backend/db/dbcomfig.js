const { Sequelize } = require('sequelize');
require('dotenv').config(); // यदि .env बाट लिन चाहन्छौ भने

//   const DATABASE_URL = "postgresql://postgres.slavtzvrliyqihxjvash:AaysuhTamrakar@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
//  console.log(process.env.DATABASE_URL)


const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

const connectDB =async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

module.exports = { sequelize, connectDB };
