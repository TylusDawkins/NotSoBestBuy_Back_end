const Router = require('express').Router()
const controller = require('../controllers/CategoryContoller')

Router.get('/', controller.GetAllCategories)

module.exports = Router