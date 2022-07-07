const { findById } = require('../models/User')
const User = require('../models/User')
const { hashPassword, comparePassword } = require('../utilites/auth')

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
};
exports.updateUser = async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message: "User not found by id"})

        }
        user.name= name?name:user.name;
        user.email = email?email:user.email;
        user.
        password=password?password:user.
        password;
        await user.save()
        res.status(500).json({message: 'user Updated successfully'})


    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Error. Try again' });


    }
}
exports.getUsers = async (req, res) => {
    try {
        let {page, size} = req.query;
        let pageNumber = page?parseInt(page) : 1
        let limit = size?parseInt(size) : 2
        const totalData = await User.countDocuments({});
        const totalPage = Math.ceil(totalData / limit)
        const users = await User.find({})
            .sort({ _id: -1 })
            .skip((pageNumber - 1) * limit)
            .limit(limit)
            .lean()
          console.log(users);

        if (users.length == 0) {
            return res(404).json({ message: 'users data noot found' })

        }
        res.status(200).json({
            users,
            totalPage,
            current: page?page : 1,
            totalData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: ' please try again lettter' })

    }
};
exports.searchUsers =async (req, res)=>{
    try{
        const {q} =req.query;
        let regex = new RegExp(q, 'i');
        let query ={
            $or:[{name: regex}, {email: regex}],
        }
        console.log(query);
        const users =await User.find(query)
        res.json(users)

    }catch(error){
        res.status(500).json({message:"error try again letter"})


    }
}
