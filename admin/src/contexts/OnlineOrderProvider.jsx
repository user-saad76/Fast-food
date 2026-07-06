import React,{createContext,useContext, useEffect} from 'react';
import { useState,useReducer } from 'react';
import { useFetch } from '../hooks/useFetch';

 
 

const OnlineOrderContext = createContext();
const onlineReducer = (state,action) =>{
   
  if(action.type === 'SET_ORDERS'){
    console.log("Set online order",action.payload);
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
function OnlineOrderProvider({children}) {
          const { data: orders, loading, error } = useFetch('http://localhost:7000/orders')
          console.log("Online orders",orders)
      // const [order,setOrder] = useState([]);

     useEffect(() => {
    if (orders) {
      dispatch({
        type: "SET_ORDERS",
        payload: orders.orders,
      });
    }
  }, [orders]);

       const [state,dispatch] = useReducer(onlineReducer,[]);
         
     
      const removeOrder = async(id) =>{
        dispatch({type:'REMOVE_ORDER',payload:id})
         const res = await fetch(`http://localhost:7000/delete/order/${id}`, {
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

  await fetch(`http://localhost:7000/update/order/${id}`, {
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
        <OnlineOrderContext.Provider value={{orders:state,removeOrder,updateOrder,clearOrders}}>
        {children}
        </OnlineOrderContext.Provider>
    )
}
export default OnlineOrderProvider;

export const useOnlineOrder = () => useContext(OnlineOrderContext);