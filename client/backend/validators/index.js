const {check,validationResult} =require('express-validator')

exports.signUpRequestValidator=[
    check('allInputs.userName')
    .notEmpty()
    .withMessage('username is required'),
    
    check('allInputs.email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('valid email is required'),

    check('allInputs.password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:4})
    .withMessage('password length mustbe greater than 4 characters'),

];

exports.signUpRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}

exports.loginRequestValidator=[
    check('allInputs.email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('valid email is required'),

    check('allInputs.password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({min:4})
    .withMessage('password must be atleast 3 character long'),
];

exports.loginRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}


// exports.depositeRequestValidator=[
//     check('allInputs.depositeAmount')
//     .notEmpty()
//     .withMessage('Amount is required'),

//     check('allInputs.pass')
//     .notEmpty()
//     .withMessage('password is required')
//     .isLength({min:4})
//     .withMessage('password must be atleast 3 character long'),
// ];

// exports.depositeRequestValidatorResult=(req,res,next)=>{
//     const error=validationResult(req)
//     if(error.array().length>0){
//         return res.status(400).json({error:error.array()[0].msg})
//     }
//     next()
// }
