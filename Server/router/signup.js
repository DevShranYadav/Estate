const express=require('express');
const User=require('../Controller/user-controller');
const loginUser =require('../Controller/login-controller')

const router=express.Router();

router.post('/signup',User)
router.post('/login',loginUser)

module.exports=router;