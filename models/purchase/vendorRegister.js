const  mongoose  = require("mongoose")

const vendorSchema=new mongoose.Schema(
    {
        primaryContact:{
            salution:String,
            firstName:String,
            lastName:String
        },
        companyName:String,
        displayName:String,
        email:String,
        phoneNumber:{
            phone:Number,
            office:Number
        },

        billingAddress:{
            doorNum:String,
            streetName:String,
            vilage:String,
            city:String,
            pinCode:Number
        },

        shippingAddress:{
            doorNum:String,
            streetName:String,
            vilage:String,
            city:String,
            pinCode:Number
        },

        contactPerson:{
            name:String,
            phone:Number
        },

        bank:{
            name:String,
            bank:String,
            ifsc:String,
            account:Number
        },

        remarks:String

    },{timestamps:true}
)

module.exports=mongoose.model("Vendor",vendorSchema)