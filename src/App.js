import './App.css';
import Header from './UI/Header';
import Footer from './UI/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pedidos from './Pages/Pedidos';
import ErrorPage from './Pages/ErrorPage';
import Confirmacion from './Pages/Confirmacion';
import Formulario from './Pages/Formulario';
import FinPedido from './Pages/FinPedido';
import { CartProvider } from './Funciones/Carrito/Contexto';
import Lateral from './Funciones/Carrito/Lateral';

function App() {
  return(
    <CartProvider>
      <div className='wrapper'>
        <Header />
        <div style={{ position: 'relative'}}>
          <Lateral />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pedidos' element={<Pedidos />} />
            <Route path='/confirmacion' element={<Confirmacion />} />
            <Route path='/formulario' element={<Formulario />} />
            <Route path='/fin' element={<FinPedido />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      <Footer />

      </div>
    </CartProvider>
  );
}

export default App;
