const express=require('express');
const vendor= require('../../controllers/purchaseOrder/vendorRegister');
const route=express.Router();

route.post('/new',vendor.create)
route.get('/',vendor.list)

module.exports=route