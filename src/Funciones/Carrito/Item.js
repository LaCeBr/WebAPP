import React from 'react';
import { useCart } from './Contexto'; 
import Button from 'react-bootstrap/Button';

function Item({ item }) {
    const { removeFromCart } = useCart();
    
    return (
      <div className="cart-item">
        <img src={item.imagen} alt={item.name} />
        <div>
            <h3>{item.nombre}</h3>
            <p>${item.precio}</p>
            <Button onClick={() => removeFromCart(item)}>Eliminar</Button>
        </div>
      </div>
    );
}
  
export default Item;