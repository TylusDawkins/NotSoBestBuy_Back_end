const req = require('express/lib/request')
const { Cart } = require('../models')

const GetCartProducts = async (req,res) =>{
    try{
        const items = await Cart.findAll()
        res.send(items)
    } catch (error){
        throw error
    }
}

const AddToCart = async (req,res) =>{ 
    try{
        productBody = {
            ...req.body
        }
        newItem = await Cart.create(productBody)
        res.send(newItem)
    } catch (error) {
        throw error
    }
} 

module.exports = {
    GetCartProducts,
    AddToCart,
}