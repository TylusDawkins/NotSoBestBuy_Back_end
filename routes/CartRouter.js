const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.get('/:user_id', controller.GetCartProducts)
Router.post('/additem/:id', controller.AddToCart)
Router.put('/change/:id', controller.ChangeQuantity)
Router.delete('/remove/:cart_id', controller.RemoveFromCart)

module.exports = Router