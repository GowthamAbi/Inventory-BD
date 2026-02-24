const itemController={
    item:(req,res)=>{

    try {
            res.status(200).json("Your Enter in itemController")

        console.log("Your Enter in itemController")
    
    } catch (error) {
        console.log("Error in ItemController ",error)
    }
}}


module.exports=itemController