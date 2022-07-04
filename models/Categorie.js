const {Schema, model}= require('mongoose')
const categorySchema = Schema({
    tittle:{type: String, require: true},
    description:{type: String},
},

)

module.exports = model('category', categorySchema)