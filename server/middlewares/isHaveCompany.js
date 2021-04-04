const { Company } = require('../models/company.js')

const isHaveCompany = async (req, res, next) => {
  try {
    const { email, fullName } = req.user
    const company = await Company.findOne({ 'user.email': email, 'user.fullName': fullName })
    if (company) throw { status: 403, msg: 'User can have only one company' }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = isHaveCompany