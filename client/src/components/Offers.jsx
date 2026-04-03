import React from "react";
import "./Offers.css";

function Offers() {
  const offers = [
    {
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      title: "Burger Deal",
      desc: "Buy 1 Get 1 Free on all burgers 🍔",
      price: "Rs. 799",
      oldPrice: "Rs. 999",
      discount: "20% OFF",
    },
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      title: "Pizza Combo",
      desc: "Large pizza + drink at discount 🍕",
      price: "Rs. 1199",
      oldPrice: "Rs. 1499",
      discount: "20% OFF",
    },
    {
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      title: "Fries Special",
      desc: "Extra crispy fries with sauces 🍟",
      price: "Rs. 399",
      oldPrice: "Rs. 599",
      discount: "30% OFF",
    },
    {
      img: "https://images.unsplash.com/photo-1544025162-d76694265947",
      title: "Chicken Bucket",
      desc: "Family bucket with 8 pieces 🍗",
      price: "Rs. 1999",
      oldPrice: "Rs. 2499",
      discount: "20% OFF",
    },
  ];

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

            <img src={item.img} alt="offer" />

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