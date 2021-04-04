const router = require('express').Router()
const authRoutes = require('./authRoutes.js')
const companyRoutes = require('./companyRoutes.js')

router.use(authRoutes)
router.use('/companies', companyRoutes)

module.exports = router