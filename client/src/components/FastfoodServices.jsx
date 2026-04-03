import React from "react";
import "./FastfoodServices.css";

function FastfoodServices() {
  const services = [
    {
      icon: "fa-truck-fast",
      title: "Fast Delivery",
      desc: "Get your favorite food delivered in under 30 minutes 🚀",
    },
    {
      icon: "fa-hamburger",
      title: "Quality Food",
      desc: "Fresh and tasty meals made with high-quality ingredients 🍔",
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      desc: "Our support team is available anytime to help you ☎️",
    },
    {
      icon: "fa-calendar-check",
      title: "Catering Services",
      desc: "Perfect for events, parties, and corporate gatherings 🎉",
    },
  ];

  return (
    <section className="fastfood-services">
      <h2 className="ffs-title">
        <i className="fa-solid fa-utensils"></i> Our Services
      </h2>
      <div className="ffs-container">
        {services.map((service, index) => (
          <div className="ffs-card" key={index}>
            <div className="ffs-icon">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FastfoodServices;