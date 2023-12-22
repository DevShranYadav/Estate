const express=require('express')
const User=require('../model/usermodel')

const user=async (req,res)=>{
    const {username,email, password}=req.body;
    const newUser=new User({username,email,password})
    await newUser.save();
    res.send(newUser);
}

module.exports=user;