import React, { useEffect, useState } from "react";
import "./Offers.css";

function Offers() {
       
    const [offers, setOffers] = useState([]);
      /* ================= FETCH FROM BACKEND ================= */
     useEffect(() => {
       fetch("http://localhost:7000/offers") // your API
      .then(res => res.json())
      .then(data => setOffers(data.Offers))
      .catch(err => console.log(err));
    }, []);


  return (
    <section className="offers">
      
      {/* Title with Icon */}
      <h2 className="offers-title">
        <i className="fa-solid fa-fire"></i> Special Offers
      </h2>

      <div className="offers-container">
        {offers.map((item, index) => (
          <div className="offer-card" key={index}>
            
            {/* Discount Badge */}
            <span className="discount-badge">
              <i className="fa-solid fa-percent"></i> {item.discount}
            </span>

            <img src={item.img?.secure_url} alt="offer" />

            <div className="offer-content">
              <h3>{item.title}</h3>

              {/* Description with Icon */}
              <p>
                <i className="fa-solid fa-utensils"></i> {item.desc}
              </p>

              <div className="offer-bottom">
                
                {/* Price Section */}
                <div className="price-box">
                  <span className="old-price">
                    <i className="fa-solid fa-tag"></i> {item.oldPrice}
                  </span>
                  <span className="price">
                    <i className="fa-solid fa-money-bill-wave"></i> {item.price}
                  </span>
                </div>

                <button className="order-btn">
                  <i className="fa-solid fa-cart-shopping"></i> Order Now
                </button>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;