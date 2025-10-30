import React from "react";
import "../styles/Banner.css";

function Banner({ title, image }) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-overlay">
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default Banner;
