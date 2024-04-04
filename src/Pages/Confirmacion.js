import React from 'react';
import { useCart } from '../Funciones/Carrito/Contexto'; 
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
                    <div key={index} style={{display:'flex', justifyContent:'center'}}>
                        <img src={item.imagen} style={{width:'50px', height:'50px'}} />
                        <h4 style={{textSizeAdjust:'auto', paddingLeft:'3rem'}}>{item.cantidad*100}g</h4>
                        <p style={{textSizeAdjust:'auto', paddingLeft:'3rem', paddingTop:'0.5rem'}}> {item.nombre}({item.precio}€/Kg)</p>
                        <h4 style={{textSizeAdjust:'auto', paddingLeft:'3rem'}}>{item.cantidad*item.precio/10}€</h4>

                    </div>
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