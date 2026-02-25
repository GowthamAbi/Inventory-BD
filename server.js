const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config();
const app=express()
const dotenv=require('dotenv')
const connectDB=require('./connectDB/connectDB')
const itemRoute = require('./routes/items/itemRouter')

dotenv.config()
connectDB()
app.use(express.json());

app.use("/",itemRoute)


app.listen(3000,(req,res)=>(
    console.log("the server is running on http://Localhost:3000")
))
