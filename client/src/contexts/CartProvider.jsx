
import React,{createContext, useContext, useState,useReducer} from 'react'
import { useEffect } from 'react';
import { useAuth } from "../contexts/AuthProvider";

const CartContext = createContext();

 const cartReducer = (state,action)=>{
      if(action.type == 'SET_CART'){
            return action.payload;
      }
    else if(action.type == 'ADD_TO_CART'){
        const existingItem = state.find(item => item._id === action.payload._id);

        if(existingItem) {
          return state.map(item =>
             item._id === action.payload._id 
            ? {...item,quantity:item.quantity+1}:item);
        }
        else{
        action.payload.quantity = 1;
        
        let newState = [...state,action.payload]
         console.log("NewState",newState)
        state = newState;
        return state;

        }

    }
     else if(action.type == 'REMOVE_CART'){
      const newState = state.filter(item => item._id !== action.payload);
      return newState;

    }

    else if(action.type == 'CLEAR_CART'){
       return [];
    }

     else if(action.type == 'INCREMENT_CART'){
        let newState = state.map(item => item._id == action.payload ?
         {...item,quantity:item.quantity+1}:item
        );
       
        return newState;
    }

    else if(action.type == 'DECREMENT_CART'){
       return state.map(item => item._id == action.payload && item.quantity > 1 ?
         {...item,quantity:item.quantity-1}:item
        );
        
    }
    else{
        return state;
    }
    

 } 

function CartProvider({children}) {
    const [cart,setCart] = useState([]);

     const {user} = useAuth();
    const [cartState,dispatch] = useReducer(cartReducer,cart)


    const fetchCart = async (userId)=>{
      try {
        const res = await fetch(`http://localhost:7000/cart-items/${userId}`);
        const result =  await res.json();
         console.log("set cart data from backend",result)
         dispatch({type:"SET_CART",payload: result.data ||[]})   
      } catch (error) {
         console.log("set cart error its could set",error) 
      
      }
    }


    const addToCart = async(product) => {
      console.log("Checking quantity",product)
       dispatch({type:'ADD_TO_CART',payload:product})
        const res = await fetch(`http://localhost:7000/cart/add/${user?._id}`, {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
       console.log("cartState",cartState)

    }
    const removeFromCart = async(id) =>{
        dispatch({type:'REMOVE_CART',payload:id})
         const res = await fetch(`http://localhost:7000/cart/delete/${id}/${user?._id}`, {
        method: "DELETE",
        credentials:"include"
      });
      console.log("Delete responsive",res)

    } 
     const ClearCart = () => dispatch({type:'CLEAR_CART'})
      const IncrementCart = (id) => {

         dispatch({type:'INCREMENT_CART',payload:id})

      }
        const decrementCart = (id) => {

           dispatch({type:'DECREMENT_CART',payload:id})

        }
          


    useEffect(() => {
    if (user?._id) {
        fetchCart(user._id);
    }
}, [user]);
         



       return(
          <CartContext.Provider value = {{cartState,setCart,addToCart,removeFromCart,ClearCart,IncrementCart,decrementCart }}>
            {children}
          </CartContext.Provider>
       )  
}
export default CartProvider

 export const useCart = () => useContext(CartContext);