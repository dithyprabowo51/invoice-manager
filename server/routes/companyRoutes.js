const router = require('express').Router()
const CompanyController = require('../controllers/CompanyController.js')
const authentication = require('../middlewares/authentication.js')
const isHaveCompany = require('../middlewares/isHaveCompany.js')

router.get('/', authentication, CompanyController.readCompany)
router.post('/', authentication, isHaveCompany, CompanyController.addCompany)
router.put('/', authentication, CompanyController.editCompany)
router.delete('/', authentication, CompanyController.deleteCompany)

module.exports = router