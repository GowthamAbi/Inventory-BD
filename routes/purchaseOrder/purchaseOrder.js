const express=require('express');
const po= require('../../controllers/purchaseOrder/purchaseOrder');
const route=express.Router();

route.post('/new',po.create)
route.get('/',po.list)

module.exports=route