import React from 'react';

function listaDetalle(props){
    const item = props.item;
    console.log('si');
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src={item.imagen} style={{width:'50px', height:'50px'}} />
            <h4 style={{textSizeAdjust:'auto', paddingLeft:'3rem'}}>{item.cantidad*100}g</h4>
            <p style={{textSizeAdjust:'auto', paddingLeft:'3rem', paddingTop:'0.5rem'}}> {item.nombre}({item.precio}€/Kg)</p>
            <h4 style={{textSizeAdjust:'auto', paddingLeft:'3rem'}}>{item.cantidad*item.precio/10}€</h4>
        </div>
    );
};

export default listaDetalle;