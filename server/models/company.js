const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  user: {
    email: String,
    fullName: String
  },
  description: String,
  city: String,
  address: String,
  phone: String
})

const Company = mongoose.model('Companies', schema)

module.exports = { Company }