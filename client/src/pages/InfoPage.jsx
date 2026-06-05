import React, { useEffect, useState } from "react";
import "./InfoPage.css";
import {  useParams } from "react-router";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function InfoPage() {
  const { slug } = useParams();
  const [offer, setOffers] = useState({});
   const {addToCart,IncrementCart,decrementCart} = useCart();
    const {user,error,loading,logout} = useAuth();


      const navigate = useNavigate();

          const redirectFunction = ()=>{
             navigate('/sign-in');
          }

  useEffect(() => {
    const getOffersBySlug = async () => {
      const res = await fetch(`http://localhost:7000/offer/slug/${slug}`);
      const data = await res.json();
      setOffers(data);
    };
    getOffersBySlug();
  }, [slug]);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="info-container">
      <div className="info-card">

        {/* IMAGE */}
        <div className="info-image">
          <img src={offer.img?.secure_url} alt={offer.title} />
        </div>

        {/* DETAILS */}
        <div className="info-details">

          <h1 className="title">{offer.title}</h1>

          <p className="description">{offer.desc}</p>

          {/* ⭐ RATING (NEW) */}
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <span>{offer.rating || 0} / 5</span>
          </div>

          {/* 🍔 INGREDIENTS (NEW) */}
          <div className="ingredients">
            <i className="fa-solid fa-burger"></i>
            {offer.ingredients?.map((item, i) => (
              <span key={i} className="ingredient-tag">
                {item}
              </span>
            ))}
          </div>

          <div className="price-section">
            <span className="price">Rs {offer.price}</span>
            <span className="old-price">Rs {offer.oldPrice}</span>
          </div>

          <span className="discount">{offer.discount} OFF</span>

          {/* QUANTITY */}
          <div className="quantity-box">
            <button onClick={()=>decrementCart(offer._id)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>IncrementCart(offer._id)}>+</button>
          </div>
           
            {
                user?.name ?<button className="order-btn" onClick={()=>addToCart(offer)}> 
                  <i className="fa-solid fa-cart-shopping"></i> Order Now</button>
                  :<button className="order-btn" onClick={redirectFunction}>
                    <i className="fa-solid fa-cart-shopping"></i> Order Now </button>
                } 



        </div>

      </div>
    </div>
  );
}

export default InfoPage;