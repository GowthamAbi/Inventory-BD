const  mongoose  = require("mongoose")

const orderSchema=new mongoose.Schema(
    {
        customerName:String,

        salesOrder:String,
        reference:String,
        salesOrderDate:Date,
        expectedDate:Date,

        table:{
            itemsDetail:String,
            qty:Number,
            rate:Number,
            amount:Number,
            discount:Number,
            gst:Number,
            charges:Number
        },
        notes:String,
        terms:String
        



    },{timestamps:true}
)

module.exports=mongoose.model("SalesOrder",orderSchema)