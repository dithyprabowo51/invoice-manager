const { User } = require('../models/user.js')
const { hashing, checkPassword } = require('../helpers/bcrypt.js')
const { generateToken } = require('../helpers/jwt.js')

class AuthController {
  static async register(req, res, next) {
    try {
      const { email, password, fullName } = req.body
      if (!email || !password) throw { status: 400, msg: 'empty email or password field' }
      const hashedPassword = hashing(password)
      const newUser = await User.create({
        email,
        password: hashedPassword,
        fullName
      })
      res.status(201).json({
        message: 'Created new user successfully',
        data: {
          _id: newUser._id,
          email: newUser.email
        }
      })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email || !password) throw { status: 400, msg: 'Email and password field cant be empty !' }
      const user = await User.findOne({ email })
      if (!user) throw { status: 400, msg: 'Invalid email or password' }
      const isValidPassword = checkPassword(password, user.password)
      if (!isValidPassword) throw { status: 400, msg: 'Invalid email or password' }
      const access_token = generateToken({
        _id: user._id,
        email: user.email,
        fullName: user.fullName
      })
      res.status(200).json({
        message: 'Login successfully',
        access_token
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AuthController