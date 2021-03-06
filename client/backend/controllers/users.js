const usersModel=require('../models/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const env=require('dotenv')
env.config()

exports.signup=(req,res)=>{
    const {userName,email,password}=req.body.allInputs  
    console.log(req.body)
    bcrypt.hash(password,10,(err,hash)=>{
            if(err) throw err
            const hashedPass= hash
            console.log(hashedPass)

        const newUsersModel=new usersModel({
            userName,email,hashedPass
        })

        newUsersModel.save().then(data=>{
           return res.status(201).json({'msg':'Account creacted successfully'})
        }).catch(err=>{
            console.log(err)
            return res.status(500).json({err,'msg':'cradentials already in use'})
        })
    })
}

exports.signin=(req,res)=>{
    const {email,password}=req.body.allInputs
   
    usersModel.find({email:email}).then(data=>{
        console.log(data[0].hashedPass)
      if(data){
            bcrypt.compare(password,data[0].hashedPass,(err,result)=>{
                if(err) throw err

                if(result){
                    console.log(result)
                    const {_id,userName,email}=data[0]
                    
                    const user={_id,userName,email}
                    const token=jwt.sign({_id:data[0]._id,role:data[0].role},process.env.JWT_AUTH)
                     res.status(200).json({token,user,'msg':'You are logged in'})
                }else{
                    return res.status(400).json({'msg':'wrong password'})
                }
            })
        }
    }).catch(err=>{
        res.status(400).json({'msg':'invalid email'})
    })
}

