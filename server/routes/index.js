const router = require('express').Router()
const authRoutes = require('./authRoutes.js')
const companyRoutes = require('./companyRoutes.js')
const partnerRoutes = require('./partnerRoutes.js')
const purchaseInvoiceRoutes = require('./purchaseInvoiceRoutes.js')
const salesInvoiceRoutes = require('./salesInvoiceRoutes.js')

router.use(authRoutes)
router.use('/companies', companyRoutes)
router.use('/partners', partnerRoutes)
router.use('/purchase-invoices', purchaseInvoiceRoutes)
router.use('/sales-invoices', salesInvoiceRoutes)

module.exports = router