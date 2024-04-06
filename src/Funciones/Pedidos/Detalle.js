import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ListaDetalle from './listaDetalle';

function Detalle(props){
    const usuario = props.usuario;
    const productos = props.productos;
    let suma=0;
    productos.forEach((item) => (
        suma += item.cantidad * item.precio
    ));
  return (
    <Modal show={props.show} centered className='modalDetalle'>
        <Modal.Header>
            <h3>{usuario.nombre} {usuario.apellidos}</h3>
        </Modal.Header>
        <Modal.Body>
            <p><span> Dirección de envío: </span>
                <span style={{ color: 'gray' }}>{usuario.domicilio}</span></p>
            <p><span> Numero de teléfono: </span>
                <span style={{ color: 'gray' }}>{usuario.telefono}</span></p>
            <p><span> Correo electrónico: </span>
                <span style={{ color: 'gray' }}>{usuario.email}</span></p>
            <p>Pedido: </p>
            {productos.map((item, index) => (
                <ListaDetalle key={index} item={item}/>
            ))}
            <h4>Total: {suma / 10}€</h4>
        </Modal.Body>
        <Modal.Footer style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            <Button onClick={props.ocultarDetalle}>Cerrar</Button>
            <Button onClick={props.pideBorrar}>Eliminar Pedido</Button>
        </Modal.Footer>
    </Modal>
  );
};

export default Detalle;
