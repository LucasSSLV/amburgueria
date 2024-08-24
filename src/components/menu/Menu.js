import React from "react";
import Slider from "react-slick";
import classico from "../../images/classico.jpeg";
import especial from "../../images/especial.jpeg";
import xTudo from "../../images/xtudo.jpeg";
import cocaCola from "../../images/cola.png";
import delrioCola from "../../images/delrioCola.webp";
import delrioLaranja from "../../images/Laranja.webp";
import delrioGuarana from "../../images/delrioGuarana.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./menu.css"; // Importa o CSS

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="products">
      <h2 className="text">Hambúrgueres</h2>
      <Slider {...settings}>
        {burgers.map((burger, index) => (
          <div key={index} className="burger-item">
            <img src={burger.image} alt={burger.name} className="burger-img" />
            <div className="overlay">
              <p className="burger-name">
                {burger.name} - R$ {burger.price.toFixed(2)}
              </p>
              <a
                href="https://wa.me/55889981508040"
                target="_blank"
                rel="noopener noreferrer"
                className="order-button"
              >
                Pedir o meu
              </a>
            </div>
          </div>
        ))}
      </Slider>

      <h2 className="text">Bebidas</h2>
      <Slider {...settings}>
        {drinks.map((drink, index) => (
          <div key={index} className="drink-item">
            <img src={drink.image} alt={drink.name} className="drink-img"/>
           <div className="overlay">
            <p className="drink-name">
              {drink.name} - R$ {drink.price}
            </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Menu;
