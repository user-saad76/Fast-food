import React, { useState } from "react";
import "./Menu.css";
import PizzaMenu from "./PizzaMenu";
import BurgerMenu from "./BurgerMenu";

function Menu() {

  // const foods = [
  //   {
  //     name: "Zinger Burger",
  //     desc: "Juicy crispy chicken burger 🍔",
  //     price: 450,
  //     img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  //   },
  //   {
  //     name: "Cheese Pizza",
  //     desc: "Loaded cheese pizza 🍕",
  //     price: 1200,
  //     img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  //   },
  //   {
  //     name: "French Fries",
  //     desc: "Crispy golden fries 🍟",
  //     price: 300,
  //     img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  //   },
  //   {
  //     name: "Fried Chicken",
  //     desc: "Spicy fried chicken 🍗",
  //     price: 900,
  //     img: "https://images.unsplash.com/photo-1544025162-d76694265947",
  //   },
  // ];

  const [search, setSearch] = useState("");

  // const filteredFoods = foods.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );

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
      <PizzaMenu/>
      <BurgerMenu/>

     

    </section>
  );
}

export default Menu;