 
 import { useState } from "react";
import { useCart } from "../contexts/CartProvider";
import "./CartPage.css";
import { Link } from "react-router";
 function CartSummary() {
     const {cartState,decrementCart,IncrementCart,removeFromCart,ClearCart} =useCart();
      const [shippingCharges,setShippingCharges] = useState(200)
    
     const cartTotal = cartState.reduce(
  (total, item) => total + item.price * item.quantity,
  0
     );

     const tax =  cartTotal * 3/100;


     return(
        <>
         {/* Summary */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cartState.length}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Rs.{shippingCharges}</span>
          </div>
          <div className="summary-row">
            <span>Tax 3%</span>
            <span>Rs.{tax}</span>
          </div>


          <div className="summary-row total">
            <span>Total</span>
            <span>Rs.{cartTotal+shippingCharges+tax}</span>
          </div>
        </div>
        </>
     )
 }
 export default CartSummary