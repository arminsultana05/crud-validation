const router = require('express').Router();

const {addTodo, getTodos, searchTodo,updateTodo}= require('../controllers/todo')
const{addToValidator, updateTodoValidator} = require('../validator/todo')
const validationResult = require('../validator')

router.post('/', addToValidator, validationResult, addTodo)
router.get('/', getTodos)
router.get('/search', searchTodo)
router.patch('/:id',updateTodoValidator, validationResult, updateTodo)

module.exports= router;