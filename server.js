const express = require('express')
const app=express()

require('dotenv').config()
app.get('/api/get',(req,res)=>{
    res.send("Hello, world!")
})
app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"satyam",
            age:22,
            contact:12254,
            ll:"hello"
        }
    })
});

app.listen(process.env.PORT,()=>{
    console.log("Listening on")
})