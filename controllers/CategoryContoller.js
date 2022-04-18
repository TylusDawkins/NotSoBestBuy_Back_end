const { Category } = require('../models')

const GetAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.findAll()
        res.send(allCategories)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllCategories
}