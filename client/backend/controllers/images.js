const imagesModel=require('../models/images')

exports.uploadImages=(req,res)=>{
   let gallaryPictures=[]

    if(req.files.length>0){
        gallaryPictures=req.files.map(item=>{
            return item.filename
        })
    }
    
    for(let i=0;i<req.files.length;i++){
       const upload = async ()=>{
           try {
            const newImagesModel= new imagesModel({gallaryPictures:gallaryPictures[i]
            })
            await newImagesModel.save()
           }catch(err){
               console.log(err)
           }
       }
       upload().then(data=>{
           return res.status(201).json({msg:'Images uploaded'})
       }).catch(err=>{
            return res.status(201).json({msg:'Images uploaded'})
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
        return res.status(200).json({data,msg:'Image Edited'})
    }).catch(err=>{
        return res.status(400).json({err,msg:'something went wrong while getting images'})
    })
}
exports.deleteImage=(req,res)=>{
    const id=req.params.id
    imagesModel.findByIdAndDelete(id).then(data=>{
        return res.status(200).json({data,msg:'Image Deleted succeessfully'})
    }).catch(err=>{
        return res.status(400).json({err,msg:'something went wrong while getting images'})
    })
}
