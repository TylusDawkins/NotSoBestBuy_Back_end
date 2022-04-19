const Router = require('express').Router()
const controller = require('../controllers/CartController')

Router.Get('/cart/', controller.GetCartProducts)
Router.post('/cart/additem', controller.AddToCart)