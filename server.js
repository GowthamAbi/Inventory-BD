const express=require('express')
const app=express()



app.use("/",(req,res)=>{
res.send("Server Running SuccessFully")
})

app.listen(3000,(req,res)=>(
    console.log("the server is running on localhost://3000")
))