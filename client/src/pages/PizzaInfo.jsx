import React, { useEffect, useState } from "react";
import "./InfoPage.css";
import {  useParams } from "react-router";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function PizzaInfo() {
  const { slug } = useParams();
  const [pizza, setPizza] = useState({});
   const {addToCart,IncrementCart,decrementCart} = useCart();
    const {user,error,loading,logout} = useAuth();


      const navigate = useNavigate();

          const redirectFunction = ()=>{
             navigate('/sign-in');
          }

  useEffect(() => {
    const getPizzasBySlug = async () => {
      const res = await fetch(`http://localhost:7000/pizza/slug/${slug}`);
      const data = await res.json();
      setPizza(data);
    };
    getPizzasBySlug();
  }, [slug]);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="info-container">
      <div className="info-card">

        {/* IMAGE */}
        <div className="info-image">
          <img src={pizza.img?.secure_url} alt={pizza.title} />
        </div>

        {/* DETAILS */}
        <div className="info-details">

          <h1 className="title">{pizza.title}</h1>

          <p className="description">{pizza.desc}</p>

          {/* ⭐ RATING (NEW) */}
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <span>{pizza.rating || 0} / 5</span>
          </div>

          {/* 🍔 INGREDIENTS (NEW) */}
          <div className="ingredients">
            <i className="fa-solid fa-burger"></i>
            {pizza.ingredients?.map((item, i) => (
              <span key={i} className="ingredient-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="price-section">
            <span className="price">Rs {pizza.price}</span>
            <span className="old-price">Rs {pizza.oldPrice}</span>
          </div>

          <span className="discount">{pizza.discount} OFF</span>

          {/* QUANTITY */}
          <div className="quantity-box">
            <button onClick={()=>decrementCart(pizza._id)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>IncrementCart(pizza._id)}>+</button>
          </div>
           
            {
                user?.name ?<button className="order-btn" onClick={()=>addToCart(pizza)}> 
                  <i className="fa-solid fa-cart-shopping"></i> Order Now</button>
                  :<button className="order-btn" onClick={redirectFunction}>
                    <i className="fa-solid fa-cart-shopping"></i> Order Now </button>
                } 



        </div>

      </div>
    </div>
  );
}

export default PizzaInfo;