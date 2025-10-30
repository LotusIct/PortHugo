// Services.js
import React from "react";
import "../styles/Services.css";
import { FaWhatsapp } from "react-icons/fa";

function Services({ title, description, services, whatsappNumber }) {
  return (
    <section className="services">
      <h2>{title}</h2>
      <p className="services-description">{description}</p>

      <div className="services-list">
        {services.map((service, index) => (
          <p key={index} className="service-item">• {service}</p>
        ))}
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        <FaWhatsapp style={{ marginRight: "8px", fontSize: "1.2rem" }} />
        Fale comigo
      </a>
    </section>
  );
}

export default Services;
