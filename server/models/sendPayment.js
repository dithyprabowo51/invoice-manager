const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = require('bson')

const schema = new Schema({
  supplier: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  payment_amount: {
    type: Number,
    required: true
  },
  payment_method: {
    type: String,
    required: true
  },
  invoices: [{
    _id: ObjectId,
    paid: Number
  }],
  user: {
    email: String
  }
})

const SendPayment = mongoose.model('send_payments', schema)

module.exports = { SendPayment }