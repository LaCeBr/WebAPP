import React, { useEffect, useState } from 'react';
import { useCart } from "../Funciones/Carrito/Contexto";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function TuComponente() {
    const {setCart} = useCart();
    const [clave, setClave] = useState('');
    const navigate = useNavigate();

    const inicia = () => {
        navigate('/');
    }

    //Una vez realizado el pedido, vaciamos el carrito
    useEffect(() => {setCart([]);}, [setCart]);

    useEffect(() => {
        // Obtenemos la URL actual
        const urlParams = new URLSearchParams(window.location.search);
        // Obtenemos el valor de la clave 'clave' de la URL
        const claveFromURL = urlParams.get('clave');
        // Actualizamos el estado con el valor obtenido
        setClave(claveFromURL);
    }, []); // El segundo parámetro del useEffect vacío indica que se ejecutará solo una vez, después de que el componente se monte

    return (
        <div className='main-content'>
            <h1 align='center' style={{color:'#860000'}}>Muchas gracias por confiar en nosotros</h1>
            <h3 align='center'>Podrá localizar su pedido como</h3>
            <h2 align='center'style={{color:'#382aff'}}>{clave}</h2>
            <div className='button-container'><Button onClick={inicia}>Nuevo Pedido</Button></div>
        </div>
    );
}

export default TuComponente;
