const router = require('express').Router();

const {
    signupUser, signinUser, getUsers,searchUsers, updateUser}= require('../controllers/user')
// const {isAuth} = require('../middlewares/authentication')
const {validName, loginUser,updateValidator} = require('../validator/user')
const validationResult = require('../validator')

//signin user
router.post ('/signup', validName, validationResult, signupUser)
router.post('/signin',loginUser,validationResult,  signinUser)
router.get('/', getUsers)
router.get('/search', searchUsers)
router.patch('/:id',updateValidator,validationResult,updateUser )

module.exports = router;