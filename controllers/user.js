const { findById } = require('../models/User')
const User = require('../models/User')
const {hashPassword, comparePassword}=require('../utilites/auth')

exports.signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const userSignIn = new User({
            name,
            email,
            password: await hashPassword(password)
        })
        await userSignIn.save()
        res.status(200).json({ message: "user sign in successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: `please try again${error}` })
    }
}

//find single user
exports.signinUser = async (req, res) => {

    try {
        const { email, password } = req.body

        const signinUser = await User.findOne({ email })
        if (!signinUser) {
            return res.status(404).json({ message: 'Invail credetial' });
            
        }
        const match = await comparePassword(password, signinUser.password);
        if (!match) {
            return res.status(404).json({ message: 'Invalid credential' });
        }

        res.status(200).json({ message: 'User successfully login' });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'user not fount' })

    }
}