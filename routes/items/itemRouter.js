const express =require('express')
const itemController = require('../../controllers/items/itemController')
const itemRoute=express.Router()

console.log("Enter in Route")

itemRoute.put("/",itemController.addItem)


module.exports=itemRoute