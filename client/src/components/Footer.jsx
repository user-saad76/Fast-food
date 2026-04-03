import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
          <h3>🍔 FastFood</h3>
          <p>
            Serving the tastiest meals with love and speed. Fast delivery, fresh ingredients, and unbeatable taste!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><i className="fa-solid fa-phone"></i> +92 300 1234567</p>
          <p><i className="fa-solid fa-envelope"></i> info@fastfood.com</p>
          <p><i className="fa-solid fa-location-dot"></i> Rawalpindi, Pakistan</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; 2026 FastFood. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;