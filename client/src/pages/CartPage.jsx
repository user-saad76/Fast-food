
import React from "react";
import "./CartPage.css";
import { useCart } from "../contexts/CartProvider";

function CartPage() {

    const {cartState,decrementCart,IncrementCart,removeFromCart,ClearCart} =useCart();
        console.log("Navbar Cart",cartState);


  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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

        {/* Summary */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cartState.length}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>Free</span>
          </div>


          <div className="summary-row total">
            <span>Total</span>
            <span>Rs. {total}</span>
          </div>

          <button className="checkout-btn">
            Proceed To Checkout
          </button>
           <button className="checkout-btn">
               Cash on delivery
          </button>
          <button className="clear-cart-btn" onClick={ClearCart} >
          Delete All Cart Items
     </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;