const orderModel = require("../../models/sales/order");

const order={
    create:async(req,res)=>{
        try {
            const item=await orderModel.create(req.body)
    
         res.status(201).json({
          success: true,
          message: "Item created successfully",
          data: item,
            })
    
    
        } catch (error) {
            console.log("Error Occur in order create File",error)
        }
    },
    
    list:async(req,res)=>{
        try {
            const datalist=await orderModel.find()
            res.status(201).json({data:datalist})
            
        } catch (error) {
             console.log("Error Occur in  order list File",error)
        }
    }
    
    }
    
    module.exports=order