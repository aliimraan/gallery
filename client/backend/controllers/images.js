const imagesModel=require('../models/images')

exports.uploadImages=(req,res)=>{
    let gallaryPictures=[]

    if(req.files.length>0){
        gallaryPictures=req.files.map(item=>{
            return item.filename
        })
    }
    
    const newImagesModel= new imagesModel({
        gallaryPictures
    })
    newImagesModel.save().then(data=>{
       return res.status(200).json({data,msg:"images added"})
   }).catch(err=>{
       return res.status(400).json({err,msg:"images not added"})
   })
}
