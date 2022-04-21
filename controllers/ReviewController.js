const { Review, User } = require('../models')
const { Op, Literal, fn, col } = require('sequelize')
const review = require('../models/review')



// const getReviews = async (req, res) => {
//     try {
//     const settings = {
//         include: [{
//             model: db.product,
//             attributes: ['name', 'price', 'img', 'description', 'categoryId'],
//         },{
//             attributes: [],
//             model: db.Rating
//         }],
//         attributes : {
//             include: [[db.sequelize.fn("COUNT", db.Sequelize.col("ratings.id")), "ratingsCount" ]]
//     },
//         raw: true,
//         nest: true
//     }
//     const reviews = await db.Review.findAll({
//         where: {
//             parentId: entityId,
//             type: 'review',
//             isDeleted: false
//         },
//         group: ["id"],
//         ...settings
//     }
