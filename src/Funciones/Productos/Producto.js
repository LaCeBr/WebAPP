import './Producto.css';
import Button from 'react-bootstrap/Button';

function Producto(props) {

    const clickHandler = () => {
        //nombre = 'Nuevo nombre';
        //setNombre('¡¡CAMBIADO!!');
        console.log(nombre);
    }

    const nombre = props.producto.nombre;
    const stock = props.producto.stock;
    const precio = props.producto.precio;
    const imagen = props.producto.imagen;
    const cantidad = 100;
    return (
        <div className='producto'>
            <img className='producto__imagen' alt={nombre} src={imagen}/>
            <div className='producto__descripcion'>
                <h2>{nombre} - {precio}€/Kg </h2>
                <div>Actualmente disponibles: {stock}Kg</div>
            </div>
            
            <Button variant='danger'>+</Button>
            <p className='producto__cantidad'>{cantidad}g</p>
            <Button variant='danger'>-</Button>
        </div>
    )
}

export default Producto;