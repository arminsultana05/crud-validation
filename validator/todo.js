const mongoose = require('mongoose')
const {check, param} = require('express-validator');
//add
exports.addToValidator= [
    check('title').trim().notEmpty().withMessage('Tittle is required'),
    check('category').custom(async(category)=>{
        if(!category){
            throw 'Category is required'
        }else{
            if(!mongoose.Types.ObjectId.isValid(category)){
                throw 'No category data found by lession id'
            }
        }
    })
];
exports.updateTodoValidator = [
    check('category').custom(async (category) => {
        if (category) {
          if (!mongoose.Types.ObjectId.isValid(category)) {
            throw 'No category data found by category id';
          }
        }
      }),
]


