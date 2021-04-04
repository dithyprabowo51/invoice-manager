const { decodedToken } = require('../helpers/jwt.js')
const { User } = require('../models/user.js')

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) throw { status: 401, msg: 'Invalid authentication' }
    const decoded = decodedToken(access_token)
    if (!decoded) throw { status: 401, msg: 'Invalid authentication' }
    const user = await User.findOne({ email: decoded.email })
    if (!user) throw { status: 401, msg: 'Invalid authentication' }
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication