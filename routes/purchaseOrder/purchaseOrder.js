const express=require('express');
const po= require('../../controllers/purchaseOrder/purchaseOrder');
const route=express.Router();

route.get('/',po.create)
route.post('/',po.list)

module.exports=route