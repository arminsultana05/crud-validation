const Category = require('../models/Categorie')
exports.addCategory = async (req, res) => {
    try {
        const catagoryPost = new Category(req.body)
        await catagoryPost.save()
        res.status(200).json({ message: "category successfully added" })


    } catch(error) {
        console.log(error);
        res.status(500).json({message: `Catagory items not fount${erroe}`})

}


}
// get all Category from  database
exports.getallCategory = async(req,res)=>{
    try{
        const allCategory =await Category.find()
        res.status(200).json(allCategory)

    }catch(erroe){
        console.log(error);
        res.status(500).json({message: `category not found ${error}`})

    }
}
//Update single category
exports.updateCategory=async(req, res)=>{
   try{
    const {tittle,  description} = req.body
    const categoryUpdate = await Category.findById(req.params.id)
    categoryUpdate.tittle=tittle?tittle: categoryUpdate.tittle
    categoryUpdate.description= description?description:categoryUpdate.description
    await categoryUpdate.save()
    res.status(200).json({message: 'updated successfully'})


   }catch(error){
    console.log(error)
    res.status(500).json({message: 'catagory not found'})

   }
}
//get single category
exports.getSingleCategory = async(req, res)=>{
    try{
        const singleCategory = await Category.findById(req.params.id)
        res.status(200).json(singleCategory)

    }catch(error){
        console.log(error)
        res.status(500).json({message: `category not found${error}`})

    }
}