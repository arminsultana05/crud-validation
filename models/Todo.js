const mongoose = require('mongoose')
const {Schema, model}= require('mongoose')
 const todoScema = Schema(
    {
        title:{type:String, require:true },
        desc:{type:String},
        category:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"category",

        },
    },
    { timesstamp: true }
 );

 module.exports= model('todo' , todoScema)