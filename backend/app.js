const express = require('express')
const { connectDB } = require('./db/dbcomfig')
const app = express()
const port = process.env.PORT
const userroutes = require('./ROUTES/userroute')
const jobroute = require('./ROUTES/jobroute')


// middleware

app.use(express.json())

connectDB()



// routes
app.use('/', userroutes)

app.use('/',jobroute)
;

app.listen(port, () => {
    console.log(`Sever is runing  port  ${port}`)
})
