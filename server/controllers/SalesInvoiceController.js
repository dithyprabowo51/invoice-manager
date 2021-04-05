const { ObjectId } = require('bson')
const { SalesInvoice } = require('../models/salesInvoice.js')

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
      const newInvoice = await SalesInvoice.create({
        supplier, payment_status, delivery_status, invoice_amount, date, due_date, products,
        user: { email },
        outstanding_amount: invoice_amount
      })
      res.status(201).json({
        message: 'Added new sales invoice successfully',
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
      const invoices = await SalesInvoice.find({ 'user.email': email }).skip(skipped).limit(perPage)
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
      const invoice = await SalesInvoice.findOne({
        _id: ObjectId(_id),
        'user.email': email,
      })
      if (!invoice) throw { status: 404, msg: 'Invoice not found' }
      if (invoice.invoice_amount !== invoice.outstanding_amount) throw { status: 400, msg: `There is a payment in invoice with _id ${invoice._id}` }
      const invoiceDeleted = await SalesInvoice.findOneAndDelete({
        _id: ObjectId(_id),
        'user.email': email
      })
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