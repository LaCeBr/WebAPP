import React from 'react';
import { useCart } from '../Funciones/Carrito/Contexto'; 
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import ListaDetalle from '../Funciones/Pedidos/listaDetalle';

function Confirmacion() {
    const {cart} = useCart();
    const navigate = useNavigate();
    
    const Cancel = () => {
        navigate('/');
    };

    const Continua = () => {
        navigate('/formulario');
    }
    
    if (cart.length > 0){
        let suma = 0;
        cart.forEach((item) => (
            suma += item.cantidad * item.precio
        ));
        return(
            <div className="main-content">
                <h1 style={{justifyContent:'center', display:'flex'}}>Su Pedido</h1>
                {cart.map((item, index) => (
                    <ListaDetalle key={index} item={item}/>
                ))}
                <h2 style={{ paddingLeft:'20rem', display:'flex', justifyContent:'center'}}>Total: {suma / 10}€</h2>
                <p style={{display:'flex', justifyContent:'center'}}>Confirme que este es su pedido deseado</p>
                <div className='button-container'>
                    <Button onClick={Cancel}>Cancelar</Button>
                    <Button onClick={Continua}>Continuar</Button>
                </div>                
            </div>
        );
    }else{
        return(
            <div className="main-content">
                <h2 style={{color:'darkgray', padding:'5rem', paddingBottom:'0'}}>El carrito está vacío</h2>
                <div style={{color:'gray', padding:'5rem', paddingTop:'0'}}>Lo sentimos, ahora mismo tu carrito está vacío diríjase a <Link to='/'>nuestra tienda</Link> para elegir sus productos favoritos</div>
            </div>
        );
    }

    
}
  
export default Confirmacion;