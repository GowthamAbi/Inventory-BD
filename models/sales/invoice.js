const mongoose =require('mongoose')

const invoiceSchema=new mongoose.Schema({
    vendorName:String,
    deliveryAddress:{
        type:String,
        enum:["Organization","Customer"]
    },
    purchaseOrder:String,
    reference:String,
    date:Date,
    deliveryDate:Date,

    table:{
            itemsDetail:String,
            qty:Number,
            rate:Number,
            amount:Number,
            discount:Number,
            gst:Number
        },
        notes:String

})

module.exports=mongoose.model('Invoice',invoiceSchema)