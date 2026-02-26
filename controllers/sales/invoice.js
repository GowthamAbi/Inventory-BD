const invoiceModel = require("../../models/sales/invoice");

const invoice={
    create:async(req,res)=>{
        try {
            const item=await invoiceModel.create(req.body)
    
         res.status(201).json({
          success: true,
          message: "Item created successfully",
          data: item,
            })
    
    
        } catch (error) {
            console.log("Error Occur in Invoice Create File",error)
        }
    },
    
    list:async(req,res)=>{
        try {
            const datalist=await invoiceModel.find()
            res.status(201).json({data:datalist})
            
        } catch (error) {
             console.log("Error Occur in Invoice list File",error)
        }
    }
    
    }
    
    module.exports=invoice