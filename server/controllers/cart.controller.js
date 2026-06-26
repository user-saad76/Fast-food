
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
        success:false,
        message: error?.message || " Could not add item to the cart"
      })
 } 
}
export const removeFromCart = async(req,res) =>{
    try {
      const {id} = req.params;
      const cartItem = await Cart.findByIdAndDelete(id)
       res.status(201).json({
        success:true,
        cartItem
      })
      
    } catch (error) {
        console.log(error)
      res.json({
        success:false,
        message: error?.message || " Could not remove item to the cart"
      })
    }
}
export const ClearCart = (req,res) =>{
 
}
export const updateCart = async(req,res) =>{
   try {
       const {id,type} = req.params;
       
       if(!id || !type) return;

       if(type === 'INCREMENT'){
          await Cart.findByIdAndUpdate(id,quantity)
       }
       else if(type === 'DECREMENT'){

       }
       else{
        return;
       }

   } catch (error) {
    
   }
}
export const getAllCartItems = async(req,res) =>{
     try {
        const cartItems = await Cart.find({});
         res.status(200).json({
        success:true,
        cartItems
      })
     } catch (error) {
            console.log(error)
      res.json({
        success:false,
        message: error?.message || " Could not get all items to the cart"
      })
     }  
}
export const getSingleCartItem = async(req,res) =>{
  try {
       const {id} = req.params;
      const cartItem = await Cart.findById(id)
       res.status(201).json({
        success:true,
        cartItem
      })
  } catch (error) {
          console.log(error)
      res.json({
        success:false,
        message: error?.message || " Could not get single item to the cart"
      })
  }
}