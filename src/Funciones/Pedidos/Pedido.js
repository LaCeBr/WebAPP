import Button from 'react-bootstrap/Button';
import { useCart } from '../Carrito/Contexto';

function Producto(props) {
    const { getFromCart, addToCart, subtractFromCart } = useCart();

    const id = props.pedido.id;
    const usuario = props.pedido.usuario;
    const productos = props.pedido.productos;

    const totalVariedades = productos.length;
    const totalPrice = productos.reduce((total, item) => total + item.precio, 0);

    return (
        <div className='pedido'>
            <h2>{id} </h2>
            <div>{totalVariedades} productos</div>
            <div>{totalPrice}€</div>
        </div>
    )
}

export default Producto;