const userModel=require('../models/User')
const passwordHashing = require('../utils/passwordHashing.utils')
const generateToken = require('../utils/token.utils')



const userRegister= async (req,res) => {
    try {
        const {name,email,password}=req.body
        
        if(!name || !email || !password) return res.status(400).json({
            message:"ENter All Credentials"
        })

        if(password.length <6) return res.status(400).json({
            message:"Enter A Strong Password"
        })

        const isExist= await userModel.findOne({email})

        if(isExist) return res.status(400).json({
            message:"User Already Registered"
        })

        const hashedPassword= await passwordHashing(password)

        const user = await userModel.create({
            name,
            email,
            password:hashedPassword
        })

        const token= generateToken(user._id , email)

        res.cookie("token",token)

        res.status(200).json({
            message:"User Is Created",
            user,
            token
        })

    } catch (error) {
        console.log(`Some Error Has Occured  ${error}`);
        res.status(400).json({
            message:`Error While Registering The User ${error}`
        })
    }
}

module.exports={
    userRegister
}