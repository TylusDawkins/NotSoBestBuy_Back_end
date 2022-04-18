const Router = require('express').Router()
const controller = require('../controllers/OrderDetailsController')

Router.get('/', controller.GetAllOrderDetails)
Router.put('/:orderDetails_Id', controller.UpdateOrderDetails)
Router.delete('/:orderDetails_Id', controller.DeleteOrderDetails)

module.exports = Router