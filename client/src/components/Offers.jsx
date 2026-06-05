import React, { useEffect, useState } from "react";
import "./Offers.css";
import { Link } from "react-router"; // ✅ FIXED
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../contexts/CartProvider";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function Offers() {
        const {data:offers,error,loading} = useFetch("http://localhost:7000/offers");
         const {user,error:OfferError,loading:OfferLoading,logout} = useAuth();
          const {addToCart} = useCart();

          const navigate = useNavigate();

          const redirectFunction = ()=>{
             navigate('/sign-in');
          }
        
  return (
    <section className="offers">
      {/* Title */}
      <h2 className="offers-title">
        <i className="fa-solid fa-fire"></i> Special Offers
      </h2>

      <div className="offers-container">
        {offers?.Offers?.map((item, index) => (
          <div className="offer-card" key={item._id || index}>
            
            {/* Discount Badge */}
            <span className="discount-badge">
              <i className="fa-solid fa-percent"></i> {item.discount}
            </span>

            <img src={item.img?.secure_url} alt={item.title} />

            <div className="offer-content">
              
              {/* ✅ FIXED LINK */}
              <h3>
                <Link to={`/offers/${item.slug}`} className="offer-link">
                  {item.title}
                </Link>
              </h3>

              {/* Description */}
              <p>
                <i className="fa-solid fa-utensils"></i> {item.desc}
              </p>

              <div className="offer-bottom">
                
                {/* Price Section */}
                <div className="price-box">
                  <span className="old-price">
                    <i className="fa-solid fa-tag"></i> Rs {item.oldPrice}
                  </span>
                  <span className="price">
                    <i className="fa-solid fa-money-bill-wave"></i> Rs {item.price}
                  </span>
                </div>
                 {
                   user?.name ?<button className="order-btn" onClick={()=>addToCart(item)}> 
                  <i className="fa-solid fa-cart-shopping"></i> Order Now</button>
                  :<button className="order-btn" onClick={redirectFunction}> <i className="fa-solid fa-cart-shopping"></i> Order Now </button>
                } 

                {/* <button className="order-btn" onClick={()=>addToCart(item)}>
                  <i className="fa-solid fa-cart-shopping"></i> Order Now
                </button> */}

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;