import React, { useState } from "react";
import "./DetailPage.css";

function DetailPage() {

  const [qty, setQty] = useState(1);

  const increase = () => setQty(qty + 1);
  const decrease = () => qty > 1 && setQty(qty - 1);

  return (
    <section className="detail-page">

      <div className="detail-container">

        {/* Image */}
        <div className="detail-image">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
            alt="food"
          />
        </div>

        {/* Content */}
        <div className="detail-content">

          <h2>Zinger Burger</h2>

          {/* Rating */}
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <span>(4.0)</span>
          </div>

          <p className="desc">
            Enjoy our delicious Zinger Burger made with crispy chicken fillet,
            fresh lettuce, creamy mayo, and soft bun. Perfect for your cravings 🍔
          </p>

          {/* Price */}
          <h3 className="price">
            <i className="fa-solid fa-money-bill-wave"></i> Rs. 450
          </h3>

          {/* Quantity */}
          <div className="quantity-box">
            <button onClick={decrease}>
              <i className="fa-solid fa-minus"></i>
            </button>

            <span>{qty}</span>

            <button onClick={increase}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          {/* Buttons */}
          <div className="detail-actions">
            <button className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>

            <button className="fav-btn">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default DetailPage;