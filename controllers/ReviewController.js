const { Review, User, Twert } = require('../models')
const { Op, Literal, fn, col } = require('sequelize')
const review = require('../models/review')

const GetReviewDetails = async (req, res) => {
    try {
        const review = await Review.findAll(req.params.product_id)
        res.send(review)
    }   catch (error) {
        throw error
    }
}

const CreateReview = async (req, res) => {
    try {
        let product_id = parseInt(req.params.product_id)
        let user_id = parseInt(req.params.user_id)
        let reviewBody = {
            product_id, 
            user_id, 
            ...req.body
        }
        const review = await Twert.create(reviewBody)
        res.send(review)
    } catch (error) {
        throw error
    }
}
const UpdateReview = async (req, res) => {
    try {
      let twert_id = parseInt(req.params.twert_id)
      let updatedReview = await Twert.update(req.body, {
        where: { id: twert_id},
        returning: true
      })
      res.send(updatedReview)
    } catch (error) {
      throw error
    }
  }
  const DeleteReview = async (req, res) => {
    try {
      let twert_id = parseInt(req.params.twert_id)
      await Twert.destroy({where: { id: twert_id}})
      res.send({ message: `Deleted Comment with an id of ${twert_id}`})
    } catch (error) {
      throw error
    }
  }


module.exports = {
    GetReviewDetails,
    CreateReview,
    UpdateReview,
    DeleteReview
}
