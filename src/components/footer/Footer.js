import React from "react";
import "./footer.css";
import Contact from "../contatos/Contatos";

const Footer = () => {
  return (
    <footer className="footer">
      <Contact />
      <p className="footer-text">© 2024 AM BURGUER. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
