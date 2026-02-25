const express=require('express')
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv')
const connectDB=require('./connectDB/connectDB')
const itemRoute = require('./routes/items/itemRouter')

dotenv.config()

connectDB().catch((error)=>{console.log("Error in MangoDB Connecting in Server page",error)})

app.use("/",itemRoute)
app.use("/",itemRoute)

app.listen(3000,(req,res)=>(
    console.log("the server is running on http://Localhost:3000")
))
