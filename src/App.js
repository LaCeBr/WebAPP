import './App.css';
import Header from './UI/Header';
import Footer from './UI/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pedidos from './Pages/Pedidos';
import ErrorPage from './Pages/ErrorPage';
import { CartProvider } from './Funciones/Carrito/Contexto';
import Lateral from './Funciones/Carrito/Lateral';
import Button from 'react-bootstrap/Button';

function App() {
  return(
    <CartProvider>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Lateral />
      <Footer />
    </CartProvider>
  );
}

export default App;
