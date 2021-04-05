const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  emailPartner: {
    type: String
  },
  city: String,
  phone: String,
  user: {
    email: String
  }
})

const Partner = mongoose.model('Partners', schema)

module.exports = { Partner }