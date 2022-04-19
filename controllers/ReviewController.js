const db = require("../models")

const { Review } = requuire('../models')

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
