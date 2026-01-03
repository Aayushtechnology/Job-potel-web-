const express = require('express')
const { connectDB } = require('./db/dbcomfig')
const app = express()
const port = 5000


app.use(express.json())

connectDB()


// console.log(process.env.DATABASE_URL)

// app.get('/',(req, res) => {
//     // console.log("this is home page ");
//     res.status(400).json({
//         massage: "process.env.DATABASE_URL"
//     })
    
// })
// app.post('/hello', (req, res) => {
//     console.log(req.body);

//     res.send(" post api secussfully ")

// })


app.listen(port, () => {
    console.log(`Sever is runing  port  ${port}`)
})
