import React, { useEffect, useState } from "react";
import "./FirstBanner.css";
import { useFetch } from "../hooks/useFetch";

function FirstBanner() {

  
  const [current, setCurrent] = useState(0);
   const {data,error,loading} = useFetch("http://localhost:7000/banners")
    const banners = data?.Banners || [];


  // Auto slide
  useEffect(() => {
     if (banners.length === 0) return; // ✅ prevent error

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [banners]); // ✅ depend on slides

  return (
    <div className="banner">
      {banners.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          <img src={slide.img?.secure_url} alt="food" />

          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default FirstBanner;