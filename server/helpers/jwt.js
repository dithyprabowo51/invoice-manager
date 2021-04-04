const jwt = require('jsonwebtoken')

const generateToken = payload => {
  return jwt.sign(payload, process.env.JWT_SECRET)
}

const decodedToken = token => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (err) {
    return false
  }
}

module.exports = { generateToken, decodedToken }