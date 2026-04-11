import React, { useEffect, useState } from "react";
import "./FirstBanner.css";

function FirstBanner() {

  const [slides, setSlides] = useState([]); // ✅ added
  const [current, setCurrent] = useState(0);

  // ✅ Fetch data from backend
  useEffect(() => {
    fetch("http://localhost:7000/banners")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data.Banners); // your API should return array
      })
      .catch((err) => console.log(err));
  }, []);

  // Auto slide
  useEffect(() => {
    if (slides.length === 0) return; // ✅ prevent error

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides]); // ✅ depend on slides

  return (
    <div className="banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          <img src={slide.img} alt="food" />

          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
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