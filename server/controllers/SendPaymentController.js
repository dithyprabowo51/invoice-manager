const { SendPayment } = require('../models/sendPayment.js')
const { PurchaseInvoice } = require('../models/purchaseInvoice.js')
const { ObjectId } = require('bson')

class SendInvoiceController {
  static async addPayment(req, res, next) {
    try {
      const { email } = req.user
      const { supplier, date, payment_method, invoices } = req.body
      if (!supplier || !date || !payment_method || !payment_method || !invoices || invoices.length === 0) throw { status: 400, msg: 'Invalid format data' }

      // Validation input invoices
      const invoicesFilter = invoices.map(invoice => {
        return {
          _id: ObjectId(invoice._id)
        }
      })
      const invoicesFromDatabase = await PurchaseInvoice.find({
        $or: invoicesFilter,
        'user.email': email
      })

      if (invoicesFilter.length !== invoicesFromDatabase.length) throw { status: 404, msg: 'Invoice not found' }

      // Validation input paid
      let payment_amount = 0
      for (let i = 0; i < invoices.length; i++) {
        payment_amount += invoices[i].paid
        for (let j = 0; j < invoicesFromDatabase.length; j++) {
          if (invoices[i]._id == invoicesFromDatabase[j]._id) {
            if (invoices[i].paid > invoicesFromDatabase[j].outstanding_amount) {
              throw { status: 400, msg: `Input paid from ${invoices[i]._id} must be less than ${invoicesFromDatabase[j].outstanding_amount}` }
            }
          }
        }
      }

      // Update outstanding amount invoices
      invoices.forEach(async invoice => {
        let inv = await PurchaseInvoice.findOne({
          _id: invoice._id
        })
        let updated = await PurchaseInvoice.findOneAndUpdate(
          {
            _id: invoice._id
          },
          {
            outstanding_amount: Number(inv.outstanding_amount) - Number(invoice.paid)
          }
        )
      })

      // Save payment
      const newPayment = await SendPayment.create({
        supplier, date, payment_amount, payment_method, invoices,
        user: { email }
      })

      res.status(200).json({
        message: 'Add new payment successfully',
        data: newPayment
      })
    } catch (err) {
      next(err)
    }
  }

  static async deletePayment(req, res, next) {
    try {
      const { _id } = req.params
      const { email } = req.user
      const deletePayment = await SendPayment.findOneAndDelete({
        _id: ObjectId(_id),
        'user.email': email
      })
      if (!deletePayment) throw { status: 404, msg: 'Payment not found' }
      deletePayment.invoices.forEach(async invoice => {
        let inv = await PurchaseInvoice.findOne({
          _id: ObjectId(invoice._id),
          'user.email': email
        })
        const updated = await PurchaseInvoice.findOneAndUpdate(
          {
            _id: ObjectId(invoice._id),
            'user.email': email
          },
          {
            outstanding_amount: inv.outstanding_amount + invoice.paid
          }
        )
      })

      res.status(200).json({
        message: 'Deleted payment successfully',
        data: deletePayment
      })
    } catch (err) {
      next(err)
    }
  }

  static async readPayments(req, res, next) {
    try {
      const { email } = req.user
      const currentPage = req.query.page || 1
      const perPage = 5
      const skipped = (Number(currentPage) - 1) * perPage
      const filter = {
        'user.email': email,
        supplier: req.query.supplier
      }
      for (let key in filter) {
        if (filter[key] === undefined) {
          delete filter[key]
        }
      }

      const payments = await SendPayment.find(filter).skip(skipped).limit(perPage)
      res.status(200).json({
        message: 'OK',
        data: payments
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = SendInvoiceController