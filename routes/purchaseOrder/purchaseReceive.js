const express=require('express');
const poReceive= require('../../controllers/purchaseOrder/purchaseReceive');
const route=express.Router();

route.get('/',poReceive.list)
route.post('/new',poReceive.create)

module.exports=route