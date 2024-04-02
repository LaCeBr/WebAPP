import React from 'react';
import { useCart } from './Contexto'; 
import Button from 'react-bootstrap/Button';

function Total() {
    const { cart } = useCart();
    if (cart.length > 0){
        let suma = 0;
        cart.forEach((item) => (
            suma += (item.cantidad / 10) * item.precio
        ));
        return(
            <>
            <h3>Total del pedido: {suma}</h3>
            <Button >Realizar Pedido</Button>
            </>
        );
    }else{
        return(
            <div style={{color:'gray', padding:'5rem'}}>El carrito está vacío</div>
        );
    }
}
  
export default Total;