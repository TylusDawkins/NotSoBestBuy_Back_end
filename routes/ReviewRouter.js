const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/reviews', controller.GetReviewDetails)
Router.post('/:product_id/:user_id', controller.CreateReview)
Router.put('/:twert_id', controller.UpdateReview)
Router.delete('/:twert_id', controller.DeleteReview)

module.exports = Router