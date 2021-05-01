const imagesModel=require('../models/images')

exports.uploadImages=(req,res)=>{
   
    let gallaryPictures=[]

    if(req.files.length>0){
        gallaryPictures=req.files.map(item=>{
            return item.filename
        })
    }
    
    for(let i=0;i<req.files.length;i++){
        const newImagesModel= new imagesModel({gallaryPictures:gallaryPictures[i]
        })
        newImagesModel.save().then(data=>{
            console.log(data)
            // return res.status(200).json({data,msg:"images added"})
        }).catch(err=>{
            console.log(err)
            // return res.status(400).json({err,msg:"images not added"})
        })
    }
    
   
}
exports.viewAllImages=(req,res)=>{
    imagesModel.find().then(data=>{
        return res.status(200).json({data,msg:'images fetched'})
    }).catch(err=>{
        return res.status(400).json({err,msg:'something went wrong while getting images'})
    })
}
exports.editImage=(req,res)=>{
    const id=req.params.id
    imagesModel.findByIdAndUpdate(id,{gallaryPictures:req.file.filename}).then(data=>{
        console.log(data)
        return res.status(200).json({data,msg:'images fetched'})
    }).catch(err=>{
        return res.status(400).json({err,msg:'something went wrong while getting images'})
    })
}
exports.deleteImage=(req,res)=>{
    const id=req.params.id
    imagesModel.findByIdAndDelete(id).then(data=>{
        return res.status(200).json({data,msg:'images fetched'})
    }).catch(err=>{
        return res.status(400).json({err,msg:'something went wrong while getting images'})
    })
}
