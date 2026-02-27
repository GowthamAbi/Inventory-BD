const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config();
const app=express()
const dotenv=require('dotenv')

const connectDB=require('./connectDB/connectDB')

const itemRoute = require('./routes/items/itemRouter')

const po = require('./routes/purchaseOrder/purchaseOrder')
const poReceive = require('./routes/purchaseOrder/purchaseReceive')
const vendor = require('./routes/purchaseOrder/vendorRegister')

const customer = require('./routes/sales/customerRegister')
const invoice = require('./routes/sales/invoice')
const order = require('./routes/sales/order')

dotenv.config()
connectDB()
app.use(express.json());

app.use("/item",itemRoute)

{/* Purchase  */}
app.use("/po",po)
app.use("/poreceive",poReceive )
app.use("/vendor",vendor )

{/* Purchase  */}
app.use("/customer",customer)
app.use("/invoice",invoice)
app.use("/order",order)


app.listen(3000,(req,res)=>(
    console.log("the server is running on http://Localhost:3000")
))
