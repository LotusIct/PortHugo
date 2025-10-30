import React from "react";
import "../styles/Contact.css";
import contactImage from "../assets/contact2.png";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Coluna da imagem */}
        <div className="contact-image">
          <img src={contactImage} alt="Contato Hugo Barroso Uelze" />
        </div>

        {/* Coluna do formulário */}
        <div className="contact-form-section">
          <h2>Precisa de orientação jurídica?</h2>
          <form className="contact-form">
            <div className="input-group">
              <input type="text" required />
              <label>Nome</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label>E-mail</label>
            </div>
            <div className="input-group">
              <input type="tel" required />
              <label>Celular</label>
            </div>
            <div className="input-group">
              <textarea rows="4" required></textarea>
              <label>Mensagem</label>
            </div>
            <button type="button" className="btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
