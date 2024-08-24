import React from "react";
// import "./Menu.css";
import classico from "../../images/classico.jpeg";
import especial from "../../images/especial.jpeg";
import xTudo from "../../images/xtudo.jpeg";
import cocaCola from "../../images/cola.png";
import delrioCola from "../../images/delrioCola.webp";
import delrioLaranja from "../../images/Laranja.webp";
import delrioGuarana from "../../images/guaraná.jpeg";

const Menu = () => {
  const burgers = [
    { name: "Clássico", price: 8.5, image: classico },
    { name: "Especial", price: 9.5, image: especial },
    { name: "X-Tudo", price: 11.0, image: xTudo },
  ];

  const drinks = [
    { name: "Coca-Cola", price: "3,00", image: cocaCola },
    { name: "Delrio Cola", price: "2,50", image: delrioCola },
    { name: "Delrio Laranja", price: "2,50", image: delrioLaranja },
    { name: "Delrio Guaraná", price: "2,50", image: delrioGuarana },
  ];

  return (
    <section>
      <h2>Hambúrgueres</h2>
      <ul>
        {burgers.map((burger, index) => (
          <li key={index}>
            <img src={burger.image} alt={burger.name} />
            {burger.name} - R$ {burger.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Bebidas</h2>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            <img src={drink.image} alt={drink.name} />
            {drink.name} - R$ {drink.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
