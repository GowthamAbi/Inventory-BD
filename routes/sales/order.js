const express=require('express');
const order= require('../../controllers/sales/order');
const route=express.Router();

route.get('/',order.create)
route.post('/',order.list)