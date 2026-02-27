const express=require('express');
const customer= require('../../controllers/sales/customerRegister');
const route=express.Router();

route.post('/new',customer.create)
route.get('/',customer.list)

module.exports=route