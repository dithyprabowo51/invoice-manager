const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

const User = mongoose.model('Users', schema)

module.exports = { User }