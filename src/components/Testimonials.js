import React from "react";
import Slider from "react-slick";
import { FaUserAlt } from "react-icons/fa";
import "../styles/Testimonials.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    { name: "Cliente A", text: "Profissional excelente, super atencioso e eficiente." },
    { name: "Cliente B", text: "Resolveu meu caso com muita dedicação e empatia." },
    { name: "Cliente C", text: "Atendimento impecável e solução rápida." },
    { name: "Cliente D", text: "Extremamente confiável e profissional." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>Depoimentos</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div className="testimonial" key={index}>
            <FaUserAlt className="testimonial-icon" />
            <p>“{t.text}”</p>
            <span>— {t.name}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
