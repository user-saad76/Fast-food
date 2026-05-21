import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({data}) {
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
           {
          data?.name ? (
          <div className="auth-buttons mobile">
         <Link to="/profile" className="btn sign-up">
           {data.name}
          </Link>
           <Link to="/log-out" className="btn sign-in">logout</Link>
           </div>
          ) : (
           <div className="auth-buttons mobile">
          <Link to="/sign-in" className="btn sign-in">Sign In</Link>
        <Link to="/sign-up" className="btn sign-up">Sign Up</Link>
         </div>
        )
      }
        </ul>

        {/* Cart Icon */}
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-count">2</span>
        </div>

        {/* Desktop Buttons */}
         {
          data?.name ? (
          <div className="auth-buttons desktop">
         <Link to="/sign-up" className="btn sign-up">
        {data.name}
          </Link>
           </div>
          ) : (
           <div className="auth-buttons desktop">
          <Link to="/sign-in" className="btn sign-in">Sign In</Link>
        <Link to="/sign-up" className="btn sign-up">Sign Up</Link>
         </div>
        )
      }
          

        
        
      </div>
    </nav>
  );
}

export default Navbar;