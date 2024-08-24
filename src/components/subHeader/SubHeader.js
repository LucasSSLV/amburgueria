import React from "react";
import "./subHeader.css"; // Vamos adicionar os estilos nesse arquivo
import fundo from "../../images/fundo.jpeg"; // Substitua pelo caminho correto da sua imagem

const SubHeader = () => {
  return (
    <section className="subH-section">
      <img src={fundo} alt="AM BURGUER" className="subH-image" />
      <div className="subH-text">
        <h1>AM BURGUER</h1>
        <h2>Sabor incomparável com um toque de simplicidade</h2>
      </div>
    </section>
  );
};

export default SubHeader;
