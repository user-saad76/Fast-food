import Order from "../models/order.model.js"

export const getAllOrders =  async(req,res,next)=>{
    try {
         const orders = await Order.find();
         res.status(200).json({
            orders
         })
    } catch (error) {
      console.log(error)   
      res.json({
         message:error?.message || "Something went wrong"
      })
    }
  
}

export const getOrderById =  async(req,res,next)=>{
    try {
       const {id} = req.params;
       const order = await Order.findById(id)
       res.status(200).json({
        order
       })
    } catch (error) {
      console.log(error)   
      res.json({
         message:error?.message || "Something went wrong"
      })
    }
  
}
export const UpdateOrderById =  async(req,res,next)=>{
    try {
       const {id} = req.params;
      const {updatedData} = req.body;
       const order = await Order.findByIdAndUpdate(id,req.body,{ returnDocument: "after" })
       res.status(200).json({
        order
       })
    } catch (error) {
      console.log(error)   
      res.json({
         message:error?.message || "Something went wrong"
      })
    }
  
}
export const OrderDeleteById =  async(req,res,next)=>{
    try {
       const {id} = req.params;
       const order = await Order.findByIdAndDelete(id)
       res.status(200).json({
        order
       })
    } catch (error) {
      console.log(error)   
      res.json({
         message:error?.message || "Something went wrong"
      })
    }
  
}