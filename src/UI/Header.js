import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../Funciones/Carrito/Contexto'; 
import Button from 'react-bootstrap/Button';

function Header() {
    const { isCartOpen, toggleCart } = useCart();

    const handleCartToggle = () => {
        toggleCart();
    };

    
    return (
        <div className='header'>
            <h1>FrutosGranel</h1>
            <Navbar className='justify-content-end'>
                <Nav.Link as={Link} to='/'> Inicio | </Nav.Link>
                <Nav.Link as={Link} to='/pedidos'> Mis Pedidos </Nav.Link>
            </Navbar>
            {/* Botón para abrir/cerrar el carrito */}
            <Button onClick={handleCartToggle}>{isCartOpen ? 'Cerrar Carrito' : 'Ver Carrito'}</Button>
        </div>
    )
}

export default Header;