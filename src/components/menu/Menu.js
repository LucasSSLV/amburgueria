import React from 'react';

const Menu = () => {
  const burgers = [
    { name: 'Clássico', price: 8.50 },
    { name: 'Especial', price: 9.50 },
    { name: 'X-Tudo', price: 11.00 },
  ];

  const drinks = [
    'Coca-Cola',
    'Delrio Cola',
    'Delrio Laranja',
    'Delrio Guaraná',
  ];

  return (
    <section>
      <h2>Hambúrgueres</h2>
      <ul>
        {burgers.map((burger, index) => (
          <li key={index}>{burger.name} - R${burger.price.toFixed(2)}</li>
        ))}
      </ul>

      <h2>Bebidas</h2>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink} - 250ml</li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
