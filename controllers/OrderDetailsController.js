const { OrderDetails } = require('../models')


const UpdateOrderDetails = async (req, res) => {
    try {
        const orderDetailsId = parseInt(req.params.orderDetails_Id)
        const updateOrderDetails = await OrderDetails.update(req.body, {
            where: { id: orderDetailsId },
            returning: true
        })
        res.send(updateOrderDetails)
    } catch (error) {
        throw error
    }   
}

const DeleteOrderDetails = async (req, res) => {
    try {
        const orderDetailsId = parseInt(req.params.orderDetails_Id)
        await OrderDetails.destroy({
            where: { id: orderDetailsId}
        })
        res.send({ message: `Deleted ${orderDetailsId}`})
    } catch (error) {
    } throw error
}

module.exports = {
    UpdateOrderDetails,
    DeleteOrderDetails
}