const express=require('express')
const User=require('../model/usermodel')

const loginUser=async (req,res)=>{
    const {email, password}=req.body;
    try {
        const ValidUser=await User.findOne({email}) 
        if(!ValidUser) return res.send("Invalid Email")
        const ValidPassword=await User.findOne({password}) 
        if(!ValidPassword) return res.send("Invalid Password")
        res.send(ValidUser)
    } catch (error) {
        res.send(error)
    }
    
    
}

module.exports=loginUser;