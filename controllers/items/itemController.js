const { default: mongoose } = require("mongoose")
const itemModels = require("../../models/items/itemModels")

const itemController={
    addItem:async(req,res)=>{

    try {
        const item=await itemModels.create(req.body)

        console.log(req.body)
           res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: item,
    });
    
    } catch (error) {
        console.log("Error in ItemController ",error)
    }
},



}


module.exports=itemController