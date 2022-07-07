const Todo = require('../models/Todo')
const Categorie= require('../models/Categorie')
exports.addTodo =async(req,res)=>{
    try{
        const {category} = req.body;
        const isCategoryExist = await Categorie.findById(category)
        if(!isCategoryExist){
            return res
            .status(404)
            .json({message:'no catagory found by category id'})
        }
        const newTodo = new Todo(req.body)
        await newTodo.save();

    }catch(error){
        console.log(error);
        res.status(500).json({message:"error try again letter"})

    }
}
exports.updateTodo = async (req, res)=>{
    try{
        const {title, desc, category} = req.body;
        const todo = await Todo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message:"Not found any data by todo id"})
        }
        todo.title= title? title:todo.title;
        todo.desc = desc? desc: todo.desc;
        todo.category =category?category: todo.category;
        await todo. save();
        res.status(500).json({message:'Todo updated successfully'})


    }catch(error){
        res.status(500).json({ message: 'Error. Try again' });

    }
}

exports.getTodos= async(req,res)=>{
    try{
        let {page, size} = req.query;
        let pageNumber = page? parseInt(page):1
        let limit = size?parseInt(size):2
        const totalDocument = await Todo.countDocuments({});
        const totalPage = Math.ceil(totalDocument/limit)
        const todos = await Todo.find({})
        .sort({_id: -1})
        .skip((pageNumber-1)*limit)
        .limit(limit)
        .lean()
        if(todos.length==0){
            return res(404).json({message:"Todo data not found"})
        }
        res.status(200).json({
            todos,
            totalPage,
            current: page? page:1,
            totalDocument
        })


    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error try again"})

    }
};
exports.searchTodo = async (req,res)=>{
  try{
    const {q} = req.query;
    let regex = new RegExp(q, 'i');
    let query = {
        $or:[{ title: regex} ,{desc: regex}],
    }
    console.log(query);
    const todos = await Todo.find(query)
    res.json(todos)

  }catch(error){
    res.status(500).json({message:"error try again letter"})

  }
}
