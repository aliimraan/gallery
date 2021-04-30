const express=require('express')
const router=express.Router()
const multer=require('multer')
const path=require('path')

const {uploadImages} =require('../controllers/images')
const {authenticate} =require('../commonMiddlewares')

const storage=multer.diskStorage({
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    },
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    }
})

const upload=multer({storage})

router.post('/add',authenticate,upload.array('gallaryPictures'),uploadImages)

module.exports=router;