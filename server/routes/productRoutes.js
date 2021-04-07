const router = require('express').Router()
const ProductController = require('../controllers/ProductController.js')
const authentication = require('../middlewares/authentication.js')

router.get('/', authentication, ProductController.readProducts)
router.post('/', authentication, ProductController.addProduct)
router.delete('/:_id', authentication, ProductController.deleteProduct)

module.exports = router