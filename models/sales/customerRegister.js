const  mongoose  = require("mongoose")

const customerSchema=new mongoose.Schema(
    {
        customertype:{
            business:String,
            individual:String
        },
        primaryContact:{
            salution:String,
            firstName:String,
            lastName:String
        },
        companyName:String,
        displayName:String,
        email:String,
        panCard:String,
        aadharCard:String,
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
            bankName:String,
            ifsc:String,
            account:Number
        },

        remarks:String

    },{timestamps:true}
)

module.exports=mongoose.model("Customer",customerSchema)