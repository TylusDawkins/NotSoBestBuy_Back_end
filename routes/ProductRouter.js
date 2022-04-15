const Router = require('express').Router()
const controller = require('../controllers/ProductController')

Router.get('/', controller.GetAllProducts)
Router.get('/:product_id', controller.GetProductDetails)
Router.put('/:property_id', controller.UpdateProduct)

module.export = Router