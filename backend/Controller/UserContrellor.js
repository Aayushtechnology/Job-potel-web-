const  {Where} = require("sequelize/lib/utils");
const User = require("../Model/UserModel")
const bcrypt = require("bcrypt");

const  registerUser = async (req,res)=>{
    const {username,password,email,role}=req.body;

    if (!username || !password || !email || !role) {
        return res.status(400).json({message: 'All fields are required'});
    }


    const userExists = await User.findOne({where: {email}});
if (userExists) {
    return res.status(409).json
    ({message: 'Email already in use'});
}

const user = await User.create({
    username, 
    password,
    email,
    role
})

    // Proceed with user registration logic (e.g., save to database)
    res.status(201).json({message: 'User registered successfully'});
}


const loginuser = async(req,res)=>{
    const {email,password}= req.body
  

    console.log(req.body)
    if(!email ||!password){
        return res.status(400).json({message:"Please provide email and password"})
    }

    const user = await User.findOne({where:{email}})

    if(!user){
        return res.status(400).json({message:"Invalid email or password"})
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){  
        return res.status(400).json({message:"Invalid email or password"})
    }
    
    res.status(200).json({message:"Login successful", user})
}



module.exports = {registerUser, loginuser};