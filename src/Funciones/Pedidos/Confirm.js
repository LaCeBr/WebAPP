import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ListaDetalle from './listaDetalle';

function Detalle(props){
  return (
    <Modal show={props.show} centered className='modalConfirm'>
        <Modal.Body>
            <p align='center'>¿Seguro que desea eliminar el pedido {props.id}?</p>
        </Modal.Body>
        <Modal.Footer style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            <Button onClick={props.ocultarConfirm}>Cancelar</Button>
            <Button onClick={props.borrarPedido}>Aceptar</Button>
        </Modal.Footer>
    </Modal>
  );
};

export default Detalle;
