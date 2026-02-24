const express=require('express')
const itemRoute = require('./routes/items/itemRouter')
const app=express()

app.use("/",itemRoute)

app.listen(3000,(req,res)=>(
    console.log("the server is running on http://Localhost:3000")
))
