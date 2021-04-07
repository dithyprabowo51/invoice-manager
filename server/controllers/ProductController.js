const { ObjectId } = require('bson')
const { Product } = require('../models/product.js')

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const { email } = req.user
      const { product_name, unit } = req.body
      if (!product_name || !unit) throw { status: 400, msg: 'Invalid format data' }
      const newProduct = await Product.create({
        product_name, unit,
        stock: 0,
        'user.email': email
      })
      res.status(201).json({
        message: 'Added new product successfully',
        data: newProduct
      })
    } catch (err) {
      next(err)
    }
  }

  static async readProducts(req, res, next) {
    try {
      const { email } = req.user
      const currentPage = req.query.page || 1
      const perPage = 5
      const skipped = (Number(currentPage) - 1) * perPage
      let filter = {
        'user.email': email,
        product_name: req.query.product_name,
        unit: req.query.unit
      }
      for (let key in filter) {
        if (filter[key] === undefined) {
          delete filter[key]
        }
      }
      const products = await Product.find(filter).skip(skipped).limit(perPage)
      res.status(200).json({
        message: 'OK',
        data: products,
      })
    } catch (err) {
      next(err)
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { email } = req.user
      const { _id } = req.params
      const deletedProduct = await Product.findOneAndDelete({
        _id: ObjectId(_id),
        'user.email': email
      })
      if (!deletedProduct) throw { status: 404, msg: 'Product not found' }
      res.status(200).json({
        message: 'Deleted product successfully',
        data: deletedProduct
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ProductController