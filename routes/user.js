const router = require('express').Router();

const {
    signupUser, signinUser
}= require('../controllers/user')
// const {isAuth} = require('../middlewares/authentication')
const {validName, loginUser} = require('../validator/user')
const validationResult = require('../validator')

//signin user
router.post ('/signup', validName, validationResult, signupUser)
router.post('/signin',loginUser,validationResult,  signinUser)

module.exports = router;