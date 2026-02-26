const vendorRegister = require("../../models/purchase/vendorRegister")

const vendor={
create:async(req,res)=>{
    try {
        const item=await vendorRegister.create(req.body)

     res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: item,
        })


    } catch (error) {
        console.log("Error Occur in Vendor Create File",error)
    }
},

list:async(req,res)=>{
    try {
        const datalist=await vendorRegister.find()
        res.status(201).json({data:datalist})
        
    } catch (error) {
         console.log("Error Occur in Vendor List File",error)
    }
}

}

module.exports=vendor