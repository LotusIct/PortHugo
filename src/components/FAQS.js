import React, { useState } from "react";
import "../styles/FAQ.css";

function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="faq">
      <h2>Perguntas Frequentes</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggle(index)}>
            {faq.question}
            <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9662;</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
