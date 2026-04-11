import React, { useEffect, useState } from "react";
import "./FastfoodServices.css";

function FastfoodServices() {

  const [services, setServices] = useState([]); // ✅ added

  // ✅ Fetch from backend
  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.Services); // adjust if needed (see note below)
      })
      .catch((err) => console.log(err));
  }, []);

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