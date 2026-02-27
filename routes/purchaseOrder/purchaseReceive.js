const express=require('express');
const poReceive= require('../../controllers/purchaseOrder/purchaseReceive');
const route=express.Router();

route.get('/',poReceive.create)
route.post('/',poReceive.list)

module.exports=route