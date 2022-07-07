const {check, param}= require('express-validator')
const validEmail =  require('../utilites/validemail')

exports.validName=[
    check('name')
    .trim()
    .notEmpty()
    .withMessage('name is requires')
    .custom(async(name)=>{
        if(name.length<5){
            throw 'name must be upto 5 character'
        }
    }),

    check('email')
    .isLowercase()
    .isEmail()
    .withMessage('Invalid Email')
    .custom(async(email)=>{
        const output = validEmail(email);
        if(!output){
            throw 'Invalid email'
        }
    }),

    check('password')
    .trim()
    .custom(async(password)=>{
        console.log(password);
        if (password.length<8){
            throw 'Please password must 8 character longer'
        }

    })
    

]
exports.loginUser=[
    check('email')
    .isLowercase()
    .isEmail()
    .withMessage('Invalid Email')
    .custom(async(email)=>{
        const output = validEmail(email);
        if(!output){
            throw 'Invalid email'
        }
    }),

    check('password')
    .trim()
    .custom(async(
        password)=>{
        console.log(password);
        if (password.length<8){
            throw 'Please password must 8 character longer'
        }

    })

];
exports.updateValidator=[
    check('email')
    
    .custom(async(email)=>{
       if(email){
        const output = validEmail(email);
        if(!output){
            throw 'Invalid email'
        }
       }
    }),

    check('password')
    .trim()
    .custom(async(password)=>{
       
        if(password){
            if (password.length<8){
                throw 'Please password must 8 character longer'
            }
        }

    })

]
