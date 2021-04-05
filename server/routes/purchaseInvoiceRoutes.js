const router = require('express').Router()
const PurchaseInvoiceController = require('../controllers/PurchaseInvoiceController.js')
const authentication = require('../middlewares/authentication.js')

router.get('/', authentication, PurchaseInvoiceController.readInvoices)
router.post('/', authentication, PurchaseInvoiceController.addInvoice)
router.delete('/:_id', authentication, PurchaseInvoiceController.deleteInvoice)

module.exports = router