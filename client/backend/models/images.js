const mongoose=require('mongoose')

const imagesScheme=new mongoose.Schema({
    imageName:{type:String,required:true}
},{timestamps:true})

const imagesModel=mongoose.model('images',imagesScheme)
module.exports=imagesModel