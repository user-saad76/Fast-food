
import React from "react";
import "./CartPage.css";
import { useCart } from "../contexts/CartProvider";
import CartSummary from "./CartSummary";
import { Link } from "react-router";

function CartPage() {

    const {cartState,decrementCart,IncrementCart,removeFromCart,ClearCart} =useCart();
        console.log("Navbar Cart",cartState);

     

  return (
    <div className="cart-container">
      <h1 className="cart-title">Order Cart</h1>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cartState.map((item) => (
            <div className="cart-card" key={item.id}>
              <img
                src={item.img.secure_url}
                alt={item.title}
                className="cart-image"
              />

              <div className="cart-details">
                <h3>{item.title}</h3>
                <p className="price">Rs. {item.price}</p>
              </div>

              <div className="quantity-box">
                <button onClick={()=>decrementCart(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>IncrementCart(item._id)}>+</button>
              </div>

              <div className="subtotal">
                Rs. {item.price * item.quantity}
              </div>

              <button className="remove-btn" onClick={()=>removeFromCart(item._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <CartSummary />
      </div>
        <Link to="/checkout" className="checkout-btn">
              Proceed To Checkout
            </Link>
          <button className="clear-cart-btn m-3" onClick={ClearCart} >
          Delete All Cart Items
     </button>
    </div>
  );
}

export default CartPage;