const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  supplier: {
    type: String,
    required: true
  },
  payment_status: {
    type: String,
    required: true
  },
  delivery_status: {
    type: String,
    required: true
  },
  invoice_amount: {
    type: Number,
    required: true
  },
  outstanding_amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  products: {
    type: [{
      product_name: String,
      product_sku: String,
      quantity: String,
      price: Number
    }]
  },
  user: {
    email: String
  }
})

const PurchaseInvoice = mongoose.model('Purchase_Invoices', schema)

module.exports = { PurchaseInvoice }