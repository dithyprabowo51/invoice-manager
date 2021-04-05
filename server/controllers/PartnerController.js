const { ObjectId } = require('bson')
const { Partner } = require('../models/partner.js')

class PartnerController {
  static async addPartner(req, res, next) {
    try {
      const { email } = req.user
      const { name, type, emailPartner, city, phone } = req.body
      if (!name || !type) throw { status: 400, msg: 'Name and type field cannot be empty' }
      const newPartner = await Partner.create({
        name,
        type,
        emailPartner,
        city,
        phone,
        user: { email }
      })
      res.status(201).json({
        message: 'Added new partner successfully',
        data: newPartner
      })
    } catch (err) {
      next(err)
    }
  }

  static async readPartners(req, res, next) {
    try {
      const { email } = req.user
      const currentPage = req.query.page || 1
      const perPage = 5
      const partners = await Partner.find({ 'user.email': email }).skip((Number(currentPage) - 1) * perPage).limit(perPage)
      res.status(200).json({
        message: 'OK',
        data: partners
      })
    } catch (err) {
      next(err)
    }
  }

  static async updatePartner(req, res, next) {
    try {
      const { email } = req.user
      const { _id } = req.params
      const { name, type, emailPartner, city, phone } = req.body
      if (!name || !type) throw { status: 400, msg: 'Name and type field cannot be empty' }
      const partnerUpdated = await Partner.findOneAndUpdate(
        { 'user.email': email, _id: ObjectId(_id) },
        {
          name, type, emailPartner, city, phone
        },
        { new: true }
      )
      if (!partnerUpdated) throw { status: 404, msg: 'Partner not found' }
      res.status(200).json({
        message: 'Updated partner successfully',
        data: partnerUpdated
      })
    } catch (err) {
      next(err)
    }
  }

  static async deletePartner(req, res, next) {
    try {
      const { _id } = req.params
      const { email } = req.user
      const partnerDeleted = await Partner.findOneAndDelete({
        _id: ObjectId(_id),
        'user.email': email
      })
      if (!partnerDeleted) throw { status: 404, msg: 'Partner not found' }
      res.status(200).json({
        message: 'Deleted partner successfully',
        data: partnerDeleted
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = PartnerController