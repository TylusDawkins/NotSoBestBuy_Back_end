const req = require('express/lib/request')
const { Cart } = require('../models')

const GetCartProducts = async (req,res) =>{
    try{
        let userId = parseInt(req.params.user_id)
        const items = await Cart.findAll({where: {user_id: userId}})
        res.send(items)
    } catch (error){
        throw error
    }
}

const AddToCart = async (req,res) =>{ 
    try{
        let user_id = req.params.id
        productBody = {
            user_id,
            ...req.body
        }
        newItem = await Cart.create(productBody)
        res.send(newItem)
    } catch (error) {
        throw error
    }
} 

const ChangeQuantity = async (req,res) => {
    try {
        let upId = parseInt(req.params.id)
        let updatedQuantity = await Cart.update(
            req.body, {
                where: {id: upId},
                returning: true
            }
        )
        res.send(updatedQuantity)
    } catch (error) {
        throw error
    }
}

const RemoveFromCart = async (req,res) =>{
    try{
        await Cart.destroy({where: {id: req.params.cart_id}})
        res.send({msg: "Item removed from cart", payload: req.params.cart_id, status:"Ok"})
    } catch (error){
        throw error
    }
}

module.exports = {
    GetCartProducts,
    AddToCart,
    RemoveFromCart,
    ChangeQuantity
}