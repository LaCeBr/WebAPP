import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1>FrutosGranel</h1>
            <Navbar className='justify-content-end'>
                <Nav.Link as={Link} to='/'> Inicio | </Nav.Link>
                <Nav.Link as={Link} to='/pedidos'> Mis Pedidos </Nav.Link>
            </Navbar>
        </div>
    )
}

export default Header;