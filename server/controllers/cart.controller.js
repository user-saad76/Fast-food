
import Cart from '../models/cart.model.js'

export const addToCart = async(req,res,next) =>{
 try{
  const { _id:productId,title,price,img} = req.body;
  const {userId} = req.params;
       const cart = await getUserCart(req.params.userId);

       console.log("Get user cart",cart);
       const item = cart.items.find(i =>i.productId?.toString() === productId);
       if(item){
        item.quantity += 1;
       }
       else{
         cart.items.push({productId,title,img,price,quantity:1})
       }
       await cart.save();
       res.json(cart);

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
      const {productId,userId} = req.params;
      console.log("productId and userId", {productId,userId})
      const cart = await getUserCart(userId);
      cart.items = cart.items.filter(i => i.productId.toString() == productId);
      await cart.save();
       res.json(cart)
      
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
export const getAllCartItemsByUser = async(req,res) =>{
     try {
        const {userId} = req.params;
        console.log("cartItems userId",userId)
        const cartItems = await Cart.findOne({userId});
        console.log("cartItems",cartItems)
          res.status(200).json({
         success:true,
          data:cartItems?.items || []
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

export const getUserCart = async(userId) =>{
    
         let cart = await Cart.findOne({userId})
         if(!cart){
            cart = await Cart.create({userId,items:[]})
         }
         return cart;
     }