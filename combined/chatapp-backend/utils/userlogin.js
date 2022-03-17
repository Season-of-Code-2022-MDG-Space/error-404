const mongoose=require("mongoose")

const newUsers=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    friends:[{type:String}]
})

const register=new mongoose.model("register",newUsers)
module.exports=register