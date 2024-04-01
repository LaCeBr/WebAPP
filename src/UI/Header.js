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
            <div className="header-content">
                <Navbar className='justify-content-end' style={{ marginTop: '10px', padding:'5px' }}>
                    <Nav.Link as={Link} to='/'> Inicio | </Nav.Link>
                    <Nav.Link as={Link} to='/pedidos'> Mis Pedidos </Nav.Link>
                </Navbar>
                {/* Botón para abrir/cerrar el carrito */}
                <Button onClick={handleCartToggle}>{isCartOpen ? <img src='https://firebasestorage.googleapis.com/v0/b/web-app-dsm-react.appspot.com/o/Carrito.png?alt=media&token=1cc628f6-00e6-42b8-8c43-063a3a0ed8a0' style={{height:'30px'}}/> : <img src='https://firebasestorage.googleapis.com/v0/b/web-app-dsm-react.appspot.com/o/Carrito.png?alt=media&token=1cc628f6-00e6-42b8-8c43-063a3a0ed8a0'  style={{height:'30px'}}/>}</Button>
            </div>
        </div>
    )
}

export default Header;
