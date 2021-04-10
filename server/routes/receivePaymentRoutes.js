const router = require('express').Router()
const ReceivePaymentController = require('../controllers/ReceivePaymentController.js')
const authentication = require('../middlewares/authentication.js')

router.get('/', authentication, ReceivePaymentController.readPayments)
router.post('/', authentication, ReceivePaymentController.addPayment)
router.delete('/:_id', authentication, ReceivePaymentController.deletePayment)

module.exports = router