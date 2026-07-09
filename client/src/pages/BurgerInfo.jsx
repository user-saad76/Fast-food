import React, { useEffect, useState } from "react";
import "./InfoPage.css";
import {  useParams } from "react-router";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function BurgerInfo() {
  const { slug } = useParams();
  const [burger, setBurger] = useState({});
   const {addToCart,IncrementCart,decrementCart} = useCart();
    const {user,error,loading,logout} = useAuth();


      const navigate = useNavigate();

          const redirectFunction = ()=>{
             navigate('/sign-in');
          }

  useEffect(() => {
    const getBurgersBySlug = async () => {
      const res = await fetch(`http://localhost:7000/burger/slug/${slug}`);
      const data = await res.json();
      setBurger(data);
    };
    getBurgersBySlug();
  }, [slug]);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="info-container">
      <div className="info-card">

        {/* IMAGE */}
        <div className="info-image">
          <img src={burger.img?.secure_url} alt={burger.title} />
        </div>

        {/* DETAILS */}
        <div className="info-details">

          <h1 className="title">{burger.title}</h1>

          <p className="description">{burger.desc}</p>

          {/* ⭐ RATING (NEW) */}
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <span>{burger.rating || 0} / 5</span>
          </div>

          {/* 🍔 INGREDIENTS (NEW) */}
          <div className="ingredients">
            <i className="fa-solid fa-burger"></i>
            {burger.ingredients?.map((item, i) => (
              <span key={i} className="ingredient-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="price-section">
            <span className="price">Rs {burger.price}</span>
            <span className="old-price">Rs {burger.oldPrice}</span>
          </div>

          <span className="discount">{burger.discount} OFF</span>

          {/* QUANTITY */}
          <div className="quantity-box">
            <button onClick={()=>decrementCart(burger._id)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>IncrementCart(burger._id)}>+</button>
          </div>
           
            {
                user?.name ?<button className="order-btn" onClick={()=>addToCart(burger)}> 
                  <i className="fa-solid fa-cart-shopping"></i> Order Now</button>
                  :<button className="order-btn" onClick={redirectFunction}>
                    <i className="fa-solid fa-cart-shopping"></i> Order Now </button>
                } 



        </div>

      </div>
    </div>
  );
}

export default BurgerInfo;