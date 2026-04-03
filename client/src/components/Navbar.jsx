import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">🍔 FastFood</div>

        {/* Hamburger */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to ="/home">Home</Link></li>
          <li><Link to ="/menu">Menu</Link></li>
          <li><Link to ="/offers">Offers</Link></li>
          <li><Link to ="/contect">Contact</Link></li>

          {/* Auth Buttons */}
          <div className="auth-buttons mobile">
            <button className="btn sign-in">Sign In</button>
            <button className="btn sign-up">Sign Up</button>
          </div>
        </ul>

        {/* Cart Icon */}
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-count">2</span>
        </div>

        {/* Desktop Buttons */}
        <div className="auth-buttons desktop">
          <button className="btn sign-in">Sign In</button>
          <button className="btn sign-up">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;