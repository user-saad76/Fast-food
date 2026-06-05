
import React,{createContext, useContext, useState,useReducer} from 'react'


const CartContext = createContext();

 const cartReducer = (state,action)=>{
    if(action.type == 'ADD_TO_CART'){
        const existingItem = state.find(item => item._id === action.payload._id);

        if(existingItem) {
          return state.map(item =>
             item._id === action.payload._id 
            ? {...item,quantity:item.quantity+1}:item);
        }
        else{
           console.log("state of cart",state)
        action.payload.quantity = 1;
        
        let newState = [...state,action.payload]
         console.log("NewState",newState)
        state = newState;
        return state;
        console.log("Updated State",state)
        console.log("add to cart dispatcher called",action.payload);

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
        console.log("increment quantity",newState)
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

    const [cartState,dispatch] = useReducer(cartReducer,cart)


    const addToCart = (product) => dispatch({type:'ADD_TO_CART',payload:product})
    const removeFromCart = (id) => dispatch({type:'REMOVE_CART',payload:id})
     const ClearCart = () => dispatch({type:'CLEAR_CART'})
      const IncrementCart = (id) => dispatch({type:'INCREMENT_CART',payload:id})
        const decrementCart = (id) => dispatch({type:'DECREMENT_CART',payload:id})
         



       return(
          <CartContext.Provider value = {{cartState,setCart,addToCart,removeFromCart,ClearCart,IncrementCart,decrementCart }}>
            {children}
          </CartContext.Provider>
       )  
}
export default CartProvider

 export const useCart = () => useContext(CartContext);