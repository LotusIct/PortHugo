import React from "react";
import "../styles/Themes.css";

function Themes({ themes }) {
  return (
    <section className="themes">
      {themes.map((theme, index) => (
       <div
  className="theme-card"
  style={{ backgroundImage: `url(${theme.image})` }}
>
  <div className="theme-overlay">
    <h3 className="theme-title">{theme.title}</h3>
    <p>{theme.content}</p>
  </div>
</div>

      ))}
    </section>
  );
}

export default Themes;
