const router = require('express').Router();

const {
    signupUser, signinUser
}= require('../controllers/user')
// const {isAuth} = require('../middlewares/authentication')
const{validName} = require('../validator/user')

//signin user
router.post ('/', validName, signupUser)
router.get('/:id', signinUser)

module.exports = router;