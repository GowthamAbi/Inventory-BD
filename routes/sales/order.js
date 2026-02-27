const express=require('express');
const order= require('../../controllers/sales/order');
const route=express.Router();

route.post('/new',order.create)
route.get('/',order.list)

module.exports=route