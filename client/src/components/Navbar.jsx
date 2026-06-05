import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useCart } from "../contexts/CartProvider";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    
  const {user,error,loading,logout} = useAuth();

    const {cartState} =useCart();
    console.log("Navbar Cart",cartState);

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
         user?.name ? (
          <div className="auth-buttons mobile">
         <Link to="/profile" className="btn sign-up">
           {user.name}
          </Link>
           <button onClick={logout} className="btn sign-in">logout</button>
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
         <Link to="/cart-page" className="cart">
         <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-count">{cartState?.length}</span>
        </Link>

        {/* Desktop Buttons */}
          {
         user?.name ? (
          <div className="auth-buttons desktop">
         <Link to="/sign-up" className="btn sign-up">
        {user.name}
          </Link>
          <button onClick={logout} className="btn sign-in">Logout</button>
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