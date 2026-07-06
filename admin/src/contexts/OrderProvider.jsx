import React,{createContext,useContext, useEffect} from 'react';
import { useState,useReducer } from 'react';
import { useFetch } from '../hooks/useFetch';

 
 

const OrderContext = createContext();
const orderReducer = (state,action) =>{
   
  if(action.type === 'SET_ORDERS'){
    console.log("Set order",action.payload);
    return action.payload;
  }

  else if(action.type === 'REMOVE_ORDER'){
        console.log("Remove one order",action.payload);

      const newState = state.filter(item => item._id !== action.payload);
      return newState;
  }
   else if(action.type === 'UPDATE_ORDER'){
        console.log("Update an order",action.payload);
        const newState = state.map(item => item._id === action.payload._id ? {...item, ...action.payload.updatedData} : item);
        return newState;
  }
   else if(action.type === 'REMOVE_ALL_ORDERS'){
        console.log("Remove all orders");
        return [];
  }
  else {
     return state;
  }

}
function OrderProvider({children}) {
         const { data: orders } = useFetch("http://localhost:7000/cash-orders");
          console.log("Cash orders",orders)
      // const [order,setOrder] = useState([]);

     useEffect(() => {
    if (orders) {
      dispatch({
        type: "SET_ORDERS",
        payload: orders.orders,
      });
    }
  }, [orders]);

       const [state,dispatch] = useReducer(orderReducer,[]);
         
     
      const removeOrder = async(id) =>{
        dispatch({type:'REMOVE_ORDER',payload:id})
         const res = await fetch(`http://localhost:7000/delete/cash-order/${id}`, {
        method: "DELETE",
        credentials:"include"
      });
      console.log("Delete responsive",res)

    } 
      const updateOrder = async (id) => {

  dispatch({
    type: "UPDATE_ORDER",
    payload: {
      _id: id,
      updatedData: {
        orderStatus: "delivered",
      },
    },
  });

  await fetch(`http://localhost:7000/update/cash-order/${id}`, {
    method: "PUT", // ya PATCH agar backend PATCH use karta hai
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      orderStatus: "delivered",
    }),
  });
};
         const clearOrders = ()=>dispatch({type:'REMOVE_ALL_ORDERS'})
       
       

    return(
        <OrderContext.Provider value={{orders:state,removeOrder,updateOrder,clearOrders}}>
        {children}
        </OrderContext.Provider>
    )
}
export default OrderProvider;

export const useOrder = () => useContext(OrderContext);