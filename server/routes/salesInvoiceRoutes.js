const router = require('express').Router()
const SalesInvoiceController = require('../controllers/SalesInvoiceController.js')
const authentication = require('../middlewares/authentication.js')

router.get('/', authentication, SalesInvoiceController.readInvoices)
router.post('/', authentication, SalesInvoiceController.addInvoice)
router.delete('/:_id', authentication, SalesInvoiceController.deleteInvoice)

module.exports = router