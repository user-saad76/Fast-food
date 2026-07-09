
import React from "react";
import "./MenuFood.css";

function MenuFood() {
  // const foods = [
  //   {
  //     name: "Zinger Burger",
  //     desc: "Juicy grilled chicken burger with cheese and lettuce 🍔",
  //     price: "Rs. 450",
  //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  //   },
  //   {
  //     name: "Cheese Pizza",
  //     desc: "Delicious cheese pizza with tomato sauce and toppings 🍕",
  //     price: "Rs. 1200",
  //     img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  //   },
  //   {
  //     name: "French Fries",
  //     desc: "Crispy golden fries with ketchup 🍟",
  //     price: "Rs. 300",
  //     img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  //   },
  //   {
  //     name: "Fried Chicken",
  //     desc: "Crispy fried chicken with special spices 🍗",
  //     price: "Rs. 900",
  //     img: "https://images.unsplash.com/photo-1544025162-d76694265947",
  //   },
  // ];

  return (
    <section className="quantity-food">
      <h2 className="qf-title">
        <i className="fa-solid fa-burger"></i> Our Fast Food Menu
      </h2>

      <div className="qf-container">
        {foods.map((item, index) => (
          <div className="qf-card" key={index}>
            
            {/* Image */}
            <div className="qf-img-box">
              <img src={item.img} alt={item.name} />
              <span className="qf-badge">
                <i className="fa-solid fa-star"></i> Popular
              </span>
            </div>

            {/* Content */}
            <div className="qf-content">
              <h3>{item.name}</h3>
              <p>
                <i className="fa-solid fa-utensils"></i> {item.desc}
              </p>
              <p className="price">
                <i className="fa-solid fa-money-bill-wave"></i> {item.price}
              </p>

              {/* Action buttons */}
              <div className="qf-actions">
                <button className="add-btn">
                  <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
                <button className="fav-btn">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuFood;