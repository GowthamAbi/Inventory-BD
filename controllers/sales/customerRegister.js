const customerRegister = require("../../models/sales/customerRegister");

const customer={
    create:async(req,res)=>{
        try {
            const item=await customerRegister.create(req.body)
    
         res.status(201).json({
          success: true,
          message: "Item created successfully",
          data: item,
            })
    
    
        } catch (error) {
            console.log("Error Occur in customer Create File",error)
        }
    },
    
    list:async(req,res)=>{
        try {
            const datalist=await customerRegister.find()
            res.status(201).json({data:datalist})
            
        } catch (error) {
             console.log("Error Occur in customer list File",error)
        }
    }
    
    }
    
    module.exports=customer