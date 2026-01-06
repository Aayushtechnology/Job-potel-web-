const express = require('express')
const { connectDB } = require('./db/dbcomfig')
const app = express()
const port = 5000
const userroutes = require('./ROUTES/userroute')
// const sequelize = require("../db/dbcomfig"); // आफ्नो db file path अनुसार


app.use(express.json())

connectDB()



app.use('/api/user',userroutes)
// sequelize.authenticate()

app.listen(port, () => {
    console.log(`Sever is runing  port  ${port}`)
})
