const { ObjectId } = require('bson')
const { PurchaseInvoice } = require('../models/purchaseInvoice.js')
const { Product } = require('../models/product.js')

class PurchaseController {
  static async addInvoice(req, res, next) {
    try {
      const { email } = req.user
      const { supplier, payment_status, delivery_status, date, due_date, products } = req.body
      if (!supplier || !payment_status || !delivery_status || !date || !due_date) throw { status: 400, msg: 'Invalid format data' }
      let invoice_amount = 0
      let productsFromDatabase = await Product.find()
      for (let i = 0; i < products.length; i++) {
        let isFound = false
        for (let j = 0; j < productsFromDatabase.length; j++) {
          if (products[i]._id == productsFromDatabase[j]._id) {
            isFound = true
          }
        }
        if (!isFound) throw { status: 404, msg: 'Product not found' }
      }
      products.forEach(product => {
        let productAmount = Number(product.quantity) * Number(product.price)
        invoice_amount += productAmount
      })
      const newInvoice = await PurchaseInvoice.create({
        supplier, payment_status, delivery_status, invoice_amount, date, due_date, products,
        user: { email },
        outstanding_amount: invoice_amount
      })
      newInvoice.products.forEach(async product => {
        let p = await Product.findById(product._id)
        const updated = await Product.findOneAndUpdate(
          { _id: ObjectId(p._id) },
          {
            stock: Number(p.stock) + product.quantity
          },
          { new: true }
        )
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
      let filter = {
        'user.email': email,
        supplier: req.query.supplier,
        payment_status: req.query.payment_status,
        delivery_status: req.query.delivery_status,
        invoice_amount: req.query.invoice_amount
      }
      for (let key in filter) {
        if (filter[key] === undefined) {
          delete filter[key]
        }
      }
      const invoices = await PurchaseInvoice.find(filter).skip(skipped).limit(perPage)
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
      const invoice = await PurchaseInvoice.findOne({
        _id: ObjectId(_id),
        'user.email': email,
      })
      if (!invoice) throw { status: 404, msg: 'Invoice not found' }
      if (invoice.invoice_amount !== invoice.outstanding_amount) throw { status: 400, msg: `There is a payment in invoice with _id ${invoice._id}` }

      let productsFromDatabase = await Product.find({ 'user.email': email })
      for (let i = 0; i < invoice.products.length; i++) {
        for (let j = 0; j < productsFromDatabase.length; j++) {
          if (productsFromDatabase[j]._id == invoice.products[i]._id) {
            if (productsFromDatabase[j].stock - invoice.products[i].quantity < 0) {
              throw { status: 400, msg: 'Item product has been bought' }
            }
          }
        }
      }

      const invoiceDeleted = await PurchaseInvoice.findOneAndDelete({
        _id: ObjectId(_id),
        'user.email': email
      })
      invoiceDeleted.products.forEach(async product => {
        let p = await Product.findById(product._id)
        const updated = await Product.findOneAndUpdate(
          { _id: ObjectId(p._id) },
          {
            stock: Number(p.stock) - product.quantity
          },
          { new: true }
        )
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