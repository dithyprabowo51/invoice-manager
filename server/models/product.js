const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  user: {
    email: { type: String, required: true }
  }
})

const Product = mongoose.model('products', schema)

module.exports = { Product }