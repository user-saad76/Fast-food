import React from "react";
import "./Contect.css";

function Contect() {
  return (
    <section className="contact">

      {/* Title */}
      <h2 className="contact-title">
        <i className="fa-solid fa-phone"></i> Contact Us
      </h2>

      <div className="contact-container">

        {/* Left Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i> Rawalpindi, Pakistan
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +92 300 1234567
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> info@fastfood.com
          </p>

          {/* Social Media */}
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <h3>Send Message</h3>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}

export default Contect;