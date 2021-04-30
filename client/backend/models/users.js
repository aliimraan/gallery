const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    userName:{type:String,trim:true,required:true},
    email:{type:String,trim:true,required:true},
    hashedPass:{type:String,trim:true,required:true}
},{timestamps:true})

const usersModel=mongoose.model('users',userSchema)
module.exports=usersModel