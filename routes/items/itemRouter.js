const express =require('express')
const itemController = require('../../controllers/items/itemController')
const itemRoute=express.Router()

itemRoute.get("/",itemController.item)


module.exports=itemRoute