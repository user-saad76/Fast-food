import React, { useEffect, useState } from "react";
import "./FastfoodServices.css";
import { useFetch } from "../hooks/useFetch";

function FastfoodServices() {

    const {data:services,error,loading} = useFetch("http://localhost:7000/services");
    
  return (
    <section className="fastfood-services">
      <h2 className="ffs-title">
        <i className="fa-solid fa-utensils"></i> Our Services
      </h2>
      <div className="ffs-container">
        {services?.Services?.map((service, index) => (
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