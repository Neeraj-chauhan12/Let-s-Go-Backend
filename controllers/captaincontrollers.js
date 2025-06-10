const Captain=require('../models/captainmodel')
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken');
const cookie= require('cookies-parser')

//sign page controllers
exports.signupcontrollers= async(req,res)=>{
    const {username,email,password,vichle,vichlenumber}=req.body;

    try {
        const captainExit=await Captain.findOne({email});
        if(captainExit){
            return res.status(400).json({error:"user already exist"})
        }


       //hashing the password   
       const hasspassword= await bcrypt.hash(password, 10);
       const newcaptain= new Captain({
        username,
        email,
        password:hasspassword,
        vichle,
        vichlenumber,
       })

       await newcaptain.save();
       res.status(201).json({message:"user register succefully",newcaptain:{
        username:newcaptain.username,
        email:newcaptain.email,
        password:newcaptain.password,
        vichle:newcaptain.vichle,
        vichlenumber:newcaptain.vichlenumber
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
        const captain=await Captain.findOne({email})
        if(!captain){
            return res.status(400).json({error:"invalid credential"});
        }

      //password match
        const isMatch= await bcrypt.compare(password, captain.password);
        if(!isMatch){
            return res.status(400).json({error:"password does not match"})
        }



        const token=jwt.sign({id:captain._id},
            process.env.JWT_ACCESS_SECRET,{
              expiresIn:"1h"
            })

            res.cookie("token",token)
            res.status(201).json({message:"login successfull",captain:{
                email:captain.email,
                password:captain.password
            }})

        
    } catch (error) {
        res.status(500).json({error:"error in login srever"})
        
    }

}

module.exports.logoutcontrollers=async(req,res)=>{
    res.clearCookie("token")
    res.json({mesage:"logout successfully"})

}