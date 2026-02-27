const express=require('express');
const invoice= require('../../controllers/sales/invoice');
const route=express.Router();

route.get('/',invoice.create)
route.post('/',invoice.list)

module.exports=route