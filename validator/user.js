const {check,param}= require('express-validator')
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
    })
]