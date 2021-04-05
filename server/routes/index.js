const router = require('express').Router()
const authRoutes = require('./authRoutes.js')
const companyRoutes = require('./companyRoutes.js')
const partnerRoutes = require('./partnerRoutes.js')

router.use(authRoutes)
router.use('/companies', companyRoutes)
router.use('/partners', partnerRoutes)

module.exports = router