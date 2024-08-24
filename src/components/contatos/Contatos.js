import React from "react";
import "./contatos.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-icons">
        <p>segue lá</p>
        <a
          href="https://www.instagram.com/am_burguer1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaInstagram />
        </a>
        <p>chama lá</p>
        <a
          href="https://wa.me/55889981508040"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
