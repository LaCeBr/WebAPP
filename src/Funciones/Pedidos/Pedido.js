import React, { useState } from 'react';
import Detalle from './Detalle';
import { Modal, Button } from 'react-bootstrap';

function Producto(props) {
    const [detalleEstado, setDetalle] = useState(false); 

    const id = props.pedido.id;
    const usuario = props.pedido.usuario;
    const productos = props.pedido.productos;

    const totalVariedades = productos.length;
    const totalPrice = productos.reduce((total, item) => total + item.precio, 0);

    const mostrarDetalle = () => {
        setDetalle(true);
    };

    const ocultarDetalle = () => {
        setDetalle(false);
    };

    const borrarPedido = () => {
        console.log('borra');
    };

    return (
        <>
            <div onClick={mostrarDetalle} className='pedido'>
                <h2>{id} </h2>
                <div>{totalVariedades} productos</div>
                <div>{totalPrice}€</div>
            </div>
            <Detalle show={detalleEstado} ocultarDetalle={ocultarDetalle} borrarPedido={borrarPedido} usuario={usuario} productos={productos} />
        </>
    )
}

export default Producto;