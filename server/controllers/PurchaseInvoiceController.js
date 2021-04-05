const { ObjectId } = require('bson')
const { PurchaseInvoice } = require('../models/purchaseInvoice.js')

class PurchaseController {
  static async addInvoice(req, res, next) {
    try {
      const { email } = req.user
      const { supplier, payment_status, delivery_status, date, due_date, products } = req.body
      if (!supplier || !payment_status || !delivery_status || !date || !due_date) throw { status: 400, msg: 'Invalid format data' }
      let invoice_amount = 0
      products.forEach(product => {
        let productAmount = Number(product.quantity) * Number(product.price)
        invoice_amount += productAmount
      })
      const newInvoice = await PurchaseInvoice.create({
        supplier, payment_status, delivery_status, invoice_amount, date, due_date, products,
        user: { email },
        outstanding_amount: invoice_amount
      })
      res.status(201).json({
        message: 'Added new purchase invoice successfully',
        data: newInvoice
      })
    } catch (err) {
      next(err)
    }
  }

  static async readInvoices(req, res, next) {
    try {
      const currentPage = req.query.page || 1
      const perPage = 5
      const skipped = (Number(currentPage) - 1) * perPage
      const { email } = req.user
      const invoices = await PurchaseInvoice.find({ 'user.email': email }).skip(skipped).limit(perPage)
      res.status(200).json({
        message: 'OK',
        data: invoices
      })
    } catch (err) {
      next(err)
    }
  }

  static async deleteInvoice(req, res, next) {
    try {
      const { _id } = req.params
      const { email } = req.user
      const invoiceDeleted = await PurchaseInvoice.findOneAndDelete({
        _id: ObjectId(_id),
        'user.email': email
      })
      if (!invoiceDeleted) throw { status: 404, msg: 'Invoice not found' }
      res.status(200).json({
        message: 'Deleted invoice successfully',
        data: invoiceDeleted
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = PurchaseController