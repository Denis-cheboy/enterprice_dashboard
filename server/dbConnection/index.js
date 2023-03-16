const mongoose=require("mongoose")

const connectDB=async(req,res,next)=>{
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/academicDB",{
        useNewURLParser:false,
        useUnifiedTopology:false
       })
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectDB