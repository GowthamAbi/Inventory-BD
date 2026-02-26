const express=require('express');
const purchaseOrder = require('../../controllers/purchaseOrder/purchaseOrder');
const route=express.Router();

route.get('/',purchaseOrder)
route.post('/',purchaseOrder)