
import Cart from '../models/cart.model.js'

export const addToCart = async(req,res,next) =>{
 try{
      const body = req.body;
      const cartItem = await Cart.create(body);
      res.status(201).json({
        success:true,
        cartItem
      })
 } catch (error) {
    console.log(error)
      res.json({
        success:true,
        message: error?.message || " Could not add item to the cart"
      })
 } 
}
export const removeFromCart = (req,res) =>{
 
}
export const ClearCart = (req,res) =>{
 
}
export const updateCart = (req,res) =>{
   
}
export const getAllCartItems = (req,res) =>{
     
}
export const getSingleCartItem = (req,res) =>{
  
}