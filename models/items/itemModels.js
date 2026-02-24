const mangoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    goods:{type:String},

    name:{type:String,require:true},
    sku:{type:Number},
    unit:{type:String},

    hight:{type:Number},
    length:{type:Number},
    width:{type:Number},

    manufacture:{type:String},
    upc:{type:String},
    ian:{type:String},

    weight:{type:String},
    weightunit:{type:String},
    brand:{type:String},
    mpn:{type:String},    
    isbn:{type:String},
    
    sellingprice:{type:Number},
    account:{type:Number},
    description:{type:String},

    costprice:{type:Number},
    account:{type:Number},
    description:{type:String},   
    vendor:{type:String},   

   opningstock:{type:Number},
    account:{type:Number},
    opningstockunit:{type:Number},

})


module.exports=mangoose.model("Item","itemSchema")