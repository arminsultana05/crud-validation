const { findById } = require('../models/User')
const User = require('../models/User')

exports.signupUser = async(req ,res)=>{
    try{
    const {name, email, password }= req.body
    const userSignIn = new User(req.body)
    await userSignIn.save()
    res.status(200).json({message:"user sign in successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:`please try again${error}`})
       }
} 

//find single user
exports.signinUser = async(req, res)=>{
    try{
      
        const signinUser =await User.findById(req.params.id)
        res.status(200).json(signinUser)

    }catch (error){
       console.log(error)
       res.status(500).json({message: 'user not fount'})

    }
}