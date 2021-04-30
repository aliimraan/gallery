const express=require('express')
const router=express.Router()
const {signup,signin}=require('../controllers/users')
const { signUpRequestValidator ,signUpRequestValidatorResult,loginRequestValidator,loginRequestValidatorResult} = require('../validators')

router.post('/register',signUpRequestValidator,signUpRequestValidatorResult,signup)
router.post('/login',loginRequestValidator,loginRequestValidatorResult,signin)


module.exports=router
