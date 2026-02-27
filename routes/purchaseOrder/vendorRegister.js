const express=require('express');
const vendor= require('../../controllers/purchaseOrder/vendorRegister');
const route=express.Router();

route.get('/',vendor.create)
route.post('/',vendor.list)

module.exports=route