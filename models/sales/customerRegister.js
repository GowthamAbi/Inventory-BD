const  mongoose  = require("mongoose")

const customerSchema=new mongoose.Schema(
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
            phone:Number,
            mail:String,
            designation:String
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

module.exports=mongoose.model("Customer",customerSchema)