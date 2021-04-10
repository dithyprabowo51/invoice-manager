const router = require('express').Router()
const SendPaymentController = require('../controllers/SendPaymentController.js')
const authentication = require('../middlewares/authentication.js')

router.get('/', authentication, SendPaymentController.readPayments)
router.post('/', authentication, SendPaymentController.addPayment)
router.delete('/:_id', authentication, SendPaymentController.deletePayment)

module.exports = router