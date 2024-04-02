import React from 'react';
import { useCart } from './Contexto'; 
import Button from 'react-bootstrap/Button';

function Item({ item }) {
    const { removeFromCart } = useCart();
    
    return (
      <div className="cart-item">
        <img src={item.imagen} style={{width:'15%'}} />
        <div className='cart-item-content' style={{paddingLeft:'1rem'}}>
          <h4 style={{ marginBottom: '0' }}>{item.nombre} ({item.precio}€/Kg)</h4>
          <p style={{ marginTop: '0' }}>{item.cantidad/10}Kg: {item.cantidad/10*item.precio}€ </p>
        </div>
        <Button onClick={() => removeFromCart(item)}><img src="https://firebasestorage.googleapis.com/v0/b/web-app-dsm-react.appspot.com/o/Papelera.jpg?alt=media&token=ebd34287-480a-4a4b-b937-2555947e7dda" style={{height:'20px'}}/></Button>
      </div>
    );
}
  
export default Item;