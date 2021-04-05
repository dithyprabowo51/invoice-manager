const router = require('express').Router()
const PartnerController = require('../controllers/PartnerController.js')
const authentication = require('../middlewares/authentication.js')

router.get('/', authentication, PartnerController.readPartners)
router.post('/', authentication, PartnerController.addPartner)
router.put('/:_id', authentication, PartnerController.updatePartner)
router.delete('/:_id', authentication, PartnerController.deletePartner)

module.exports = router