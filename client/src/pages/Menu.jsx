import React, { useState } from "react";
import "./Menu.css";

function Menu() {

  const foods = [
    {
      name: "Zinger Burger",
      desc: "Juicy crispy chicken burger 🍔",
      price: 450,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Cheese Pizza",
      desc: "Loaded cheese pizza 🍕",
      price: 1200,
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      name: "French Fries",
      desc: "Crispy golden fries 🍟",
      price: 300,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      name: "Fried Chicken",
      desc: "Spicy fried chicken 🍗",
      price: 900,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="menu">

      {/* Title */}
      <h2 className="menu-title">
        <i className="fa-solid fa-utensils"></i> Our Menu
      </h2>

      {/* Search Bar */}
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search your favorite food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Food Cards */}
      <div className="menu-container">
        {filteredFoods.map((item, index) => (
          <div className="menu-card" key={index}>

            <img src={item.img} alt="food" />

            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <div className="menu-bottom">
                <span className="price">
                  <i className="fa-solid fa-money-bill-wave"></i> Rs. {item.price}
                </span>

                <button className="order-btn">
                  <i className="fa-solid fa-cart-plus"></i> Add
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Menu;