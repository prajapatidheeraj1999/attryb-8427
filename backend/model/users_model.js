const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:String,
    password:String,
    confirmPassword:String
})

const uermodale=mongoose.model("users",userSchema)

module.exports={uermodale}