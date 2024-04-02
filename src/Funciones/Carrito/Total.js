import React from 'react';
import { useCart } from './Contexto'; 
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function Total() {
    const { cart, toggleCart } = useCart();
    const navigate = useNavigate();
    
    const realizaPedido = () => {
        toggleCart();
        navigate('/confirmacion');
    };
    
    if (cart.length > 0){
        let suma = 0;
        cart.forEach((item) => (
            suma += item.cantidad * item.precio
        ));
        return(
            <div style={{paddingLeft:'1rem'}}>
                <h3>Total del pedido: {suma / 10}€</h3>
                <Button onClick={realizaPedido}>Realizar Pedido</Button>
            </div>
        );
    }else{
        return(
            <div style={{color:'gray', padding:'5rem'}}>El carrito está vacío</div>
        );
    }
}
  
export default Total;