import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Fecha o menu após a navegação
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <h1 className={styles.title}>AM BURGUER</h1>
          <p className={styles.subtitle}>Os melhores hambúrgueres da cidade!</p>
        </div>
        <div className={styles.burgerMenu}>
          <FaBars onClick={toggleMenu} className={styles.burgerIcon} />
        </div>
      </div>
      {isMenuOpen && (
        <nav className={styles.navMenu}>
          <ul>
            <li onClick={() => scrollToSection("contact")}>Contato</li>
            <li onClick={() => scrollToSection("products")}>Produtos</li>
            <li onClick={() => scrollToSection("about")}>Sobre Nós</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
