const router = require('express').Router();
const {addCategory, getallCategory, updateCategory,getSingleCategory} = require('../controllers/catagories')
router.post('/', addCategory)
router.get('/',  getallCategory )
router.patch('/:id', updateCategory)
router.get('/:id', getSingleCategory)

module.exports = router