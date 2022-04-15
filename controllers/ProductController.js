const { Product } = require('../models')

const GetAllProducts = async (req,res) => {
    try {

        const allProducts = await Product.findAll()
        res.send(allProducts)
    } catch (error) {
        throw error
    }
}

const UpdateProduct = async (req, res) => {
    try {
        const productId = parseInt(req.params.product_id)
        const updatedProduct = await Product.update(req.body, {
            where: { id: productId},
            returning: true
        })
        res.send(updatedProduct)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetAllProducts,
    UpdateProduct
}
