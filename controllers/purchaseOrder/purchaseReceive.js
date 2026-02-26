const purchaseReceive = require('../../models/purchase/purchaseReceive')
const poReceive={
create:async(req,res)=>{
    try {
        const item=await purchaseReceive.create(req.body)

     res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: item,
        })


    } catch (error) {
        console.log("Error Occur in PO Receive  Create File",error)
    }
},

list:async(req,res)=>{
    try {
        const datalist=await purchaseReceive.find()
        res.status(201).json({data:datalist})
        
    } catch (error) {
         console.log("Error Occur in PO Receive List File",error)
    }
}

}

module.exports=poReceive