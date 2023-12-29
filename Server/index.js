const express = require('express')
const cors=require('cors')
require('./db/config')
const User=require('./router/signup')
const app=express();
app.use(cors())
app.use(express.json())

app.use('/',User)




app.listen(5000,()=>{
    console.log("Server is running on Port 5000")
})


