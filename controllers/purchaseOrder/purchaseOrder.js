const purchaseOrder=require('../../models/purchase/purchaseOrder')
const po={
create:async(req,res)=>{
    try {
        const item=await purchaseOrder.create(req.body)

     res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: item,
        })


    } catch (error) {
        console.log("Error Occur in PO Create File",error)
    }
},

list:async(req,res)=>{
    try {
        const datalist=await purchaseOrder.find()
        res.status(201).json({data:datalist})
        
    } catch (error) {
         console.log("Error Occur in PO List File",error)
    }
}

}

module.exports=po