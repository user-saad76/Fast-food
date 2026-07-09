import React, { useEffect, useState } from "react";
import "./PizzaMenu.css";
import { Link } from "react-router"; // ✅ FIXED
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../contexts/AuthProvider";

function BurgerMenu() {
        const {data:burgers,error,loading} = useFetch("http://localhost:7000/burgers");
        console.log("burger-data",burgers)
         const {user} = useAuth();
         
        
  return (
    <section className="offers">
      {/* Title */}
      <h2 className="offers-title">
        <i className="fa-solid fa-fire"></i> Burger
      </h2>

      <div className="offers-container">
        {burgers?.Burgers?.map((item, index) => (
          <div className="offer-card" key={item._id || index}>
            
            {/* Discount Badge */}
            <span className="discount-badge">
              <i className="fa-solid fa-percent"></i> {item.discount}
            </span>

            <img src={item.img?.secure_url} alt={item.title} />

            <div className="offer-content">
              
              {/* ✅ FIXED LINK */}
              <h3>
                <Link to={`/burgers/${item.slug}`} className="offer-link">
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
                   user?.name ?<button className="order-btn" > 
                  <i className="fa-solid fa-cart-shopping"></i> Order Now</button>
                  :<button className="order-btn" > <i className="fa-solid fa-cart-shopping"></i> Order Now </button>
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

export default BurgerMenu;