const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/', controller.GetCartProducts)
Router.post('/cart/additem', controller.AddToCart)

module.exports = Router