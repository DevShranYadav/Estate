const express=require('express');
const User=require('../Controller/user-controller')

const router=express.Router();

router.post('/signup',User)

module.exports=router;