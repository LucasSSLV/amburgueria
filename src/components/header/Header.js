import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./header.module.css"; // ou styled-components

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <h1 className={styles.title}>AM BURGUER</h1>
          <p className={styles.subtitle}>Os melhores hambúrgueres da cidade!</p>
        </div>
        <div className={styles.icons}>
          <a
            href="https://www.instagram.com/am_burguer1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://wa.me/55889981508040"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className={styles.icon} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
