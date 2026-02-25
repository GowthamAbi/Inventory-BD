const  mongoose  = require("mongoose");

const receiveSchema=new mongoose.Schema({

    vendorName:String,
    poNumber:String,
    poReceiveNumber:String,
    receiveDate:Date,
    
    table:{
        items:String,
        ordered:Number,
        received:Number,
        inTransit:Number,
        qtytoReceive:Number
    }
},
{timestamps:true}
)

module.exports=mongoose.model("Receive",receiveSchema)