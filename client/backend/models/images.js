const mongoose=require('mongoose')

const imagesScheme=new mongoose.Schema({
    gallaryPictures:{type:String}
},{timestamps:true})

const imagesModel=mongoose.model('images',imagesScheme)
module.exports=imagesModel