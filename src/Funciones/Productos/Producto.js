import Button from 'react-bootstrap/Button';
import { useCart } from '../Carrito/Contexto';

function Producto(props) {
    const { getFromCart, addToCart, subtractFromCart } = useCart();

    const addItem = () => {
        let item = {
            nombre: nombre,
            precio: precio,
            cantidad: 1,
            imagen: imagen
        };

        addToCart(item);
    };

    const subtractItem = () => {
        subtractFromCart(nombre);
    };

    const nombre = props.producto.nombre;
    const stock = props.producto.stock;
    const precio = props.producto.precio;
    const imagen = props.producto.imagen;
    let cantidad = getFromCart(nombre)*100;
    return (
        <div className='producto'>
            <img className='producto__imagen' alt={nombre} src={imagen}/>
            <div className='producto__descripcion'>
                <h2>{nombre} - {precio}€/Kg </h2>
                <div>Actualmente disponibles: {stock}Kg</div>
            </div>
            
            <Button variant='danger' onClick={addItem}>+</Button>
            <p className='producto__cantidad'>{cantidad}g</p>
            <Button variant='danger' onClick={subtractItem}>-</Button>
        </div>
    )
}

export default Producto;