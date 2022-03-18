const mongoose=require("mongoose")

const movies=new mongoose.Schema({
    name:{
        type:String,   
    },
    title:{
        type:String
    },
    img:{
        type:String
    },

})
const viewMovies=new mongoose.model("movieApi",movies)
module.exports=viewMovies