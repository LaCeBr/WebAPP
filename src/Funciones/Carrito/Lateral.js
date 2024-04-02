import React from 'react';
import Item from './Item';
import Total from './Total';
import { useCart } from './Contexto'; 

function Lateral() {
  const { cart, isCartOpen, toggleCart } = useCart();

  return (
    <div className={`side-cart ${isCartOpen ? 'open' : ''}`}>
      <h2 style={{paddingLeft:'1rem'}}>Carrito de Compras</h2>
      {cart.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Total />
    </div>
  );
}

export default Lateral;