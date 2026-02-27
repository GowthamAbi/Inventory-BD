const express=require('express');
const customer= require('../../controllers/sales/customerRegister');
const route=express.Router();

route.get('/',customer.create)
route.post('/',customer.list)

module.exports=route