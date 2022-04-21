const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/:user_id', controller.GetCartProducts)
Router.post('/additem', controller.AddToCart)
Router.post('/remove/:cart_id', controller.RemoveFromCart)

module.exports = Router