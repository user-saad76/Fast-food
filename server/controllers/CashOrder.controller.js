import CashOrder from "../models/cashOrder.model.js";

export const getAllCashOrders =  async(req,res,next)=>{
    try {
         const orders = await CashOrder.find();
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
export const CashOrderDeleteById =  async(req,res,next)=>{
    try {
       const {id} = req.params;
       const order = await CashOrder.findByIdAndDelete(id)
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
export const UpdateOrderById = async(req,res,next)=>{
    try {
       const {id} = req.params;
       const {updatedData} = req.body;
       const order = await CashOrder.findByIdAndUpdate(id,req.body,{new:true})
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