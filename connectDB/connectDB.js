const mongoose=require('mangoose')

const connectDB=async()=>{
    try{
        const db=await mongoose.connnect(process.env.MONGO_URI)
        console.log(`MongoDB Connect:${db.connection.host}`)
    }catch(error){
console.log("Connecting MangoDB Issue",error)
    }
}

module.exports=connectDB