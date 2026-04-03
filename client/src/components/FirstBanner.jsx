import React, { useEffect, useState } from "react";
import "./FirstBanner.css";

function FirstBanner() {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      title: "Delicious Burgers",
      desc: "Juicy, hot & made fresh every day 🍔",
    },
    {
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      title: "Cheesy Pizza",
      desc: "Loaded with cheese & fresh toppings 🍕",
    },
    {
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      title: "Crispy Fries",
      desc: "Golden, crunchy & irresistible 🍟",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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