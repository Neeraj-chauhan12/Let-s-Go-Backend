const User=require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken');
const cookie= require('cookies-parser')

//sign page controllers
exports.signupcontrollers= async(req,res)=>{
    const {username,email,password}=req.body;

    try {
        const userExit=await User.findOne({email});
        if(userExit){
            return res.status(400).json({error:"user already exist"})
        }


       //hashing the password   
       const hasspassword= await bcrypt.hash(password, 10);
       const newuser= new User({
        username,
        email,
        password:hasspassword,
       })

       await newuser.save();
       res.status(201).json({message:"user register succefully",newuser:{
        username:newuser.username,
        email:newuser.email,
        password:newuser.password
       }});
    
        
    } catch (error) {
        console.log("error in server")
        res.status(500).json({error:"server errror"})
        
    }


}


//login page controllers
exports.logincontrollers=async(req,res)=>{
    const {email,password}=req.body;
    try {
        
        //email match
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({error:"invalid credential"});
        }

      //password match
        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error:"password does not match"})
        }



        const token=jwt.sign({id:user._id},
            process.env.JWT_ACCESS_SECRET,{
              expiresIn:"1h"
            })

            res.cookie("token",token)
            res.status(201).json({message:"login successfull",user:{
                email:user.email,
                password:user.password
            }})

        
    } catch (error) {
        res.status(500).json({error:"error in login srever"})
        
    }

}

module.exports.logoutcontrollers=async(req,res)=>{
    res.clearCookie("token")
    res.json({mesage:"logout successfully"})

}