const { Company } = require('../models/company.js')

class CompanyController {
  static async addCompany(req, res, next) {
    try {
      const { companyName, description, city, address, phone } = req.body
      if (!companyName) throw { status: 400, msg: 'empty company name field' }
      const { fullName, email } = req.user
      const newCompany = await Company.create({
        companyName,
        description,
        city,
        address,
        phone,
        user: {
          email, fullName
        }
      })
      res.status(201).json({
        message: 'Created new company successfully',
        data: newCompany
      })
    } catch (err) {
      next(err)
    }
  }

  static async readCompany(req, res, next) {
    try {
      const { email, fullName } = req.user
      const company = await Company.findOne({ 'user.email': email, 'user.fullName': fullName })
      if (!company) throw { status: 404, 'msg': 'Company not found' }
      res.status(200).json({ message: 'OK', data: company })
    } catch (err) {
      next(err)
    }
  }

  static async editCompany(req, res, next) {
    try {
      const { email, fullName } = req.user
      const { companyName, description, city, address, phone } = req.body
      const companyUpdated = await Company.findOneAndUpdate(
        {
          'user.email': email,
          'user.fullName': fullName
        },
        { companyName, description, city, address, phone },
        {
          new: true
        }
      )
      if (!companyUpdated) throw { status: 404, msg: 'Company not found' }
      res.status(200).json({
        message: 'Updated company successfully',
        data: companyUpdated
      })
    } catch (err) {
      next(err)
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const { email, fullName } = req.user
      const companyDeleted = await Company.findOneAndDelete(
        {
          'user.email': email,
          'user.fullName': fullName
        }
      )
      if (!companyDeleted) throw { status: 404, msg: 'Company not found' }
      res.status(200).json({
        message: 'Deleted company successfully',
        data: companyDeleted
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CompanyController