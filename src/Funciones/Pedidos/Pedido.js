import React, { useState } from 'react';
import Detalle from './Detalle';
import axios from 'axios';

function Producto(props) {
    const [detalleEstado, setDetalle] = useState(false); 

    const clave = props.pedido.clave;
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
        setDetalle(false);
        axios.delete('https://web-app-dsm-react-default-rtdb.europe-west1.firebasedatabase.app/pedidos/'+ clave+ '.json')
        .then((response) => {
            alert('El pedido '+id+' ha sido eliminado')
        })
        .catch((error) => {
            setDetalle(true);
            alert('Debido a problemas de conexión, no ha sido posible eliminar el pedido. Inténtelo de nuevo más tarde');
        })
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