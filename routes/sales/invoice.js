const express=require('express');
const invoice= require('../../controllers/sales/invoice');
const route=express.Router();

route.post('/new',invoice.create)
route.get('/',invoice.list)

module.exports=route