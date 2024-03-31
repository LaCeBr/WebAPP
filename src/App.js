import './App.css';
import Header from './UI/Header';
import Footer from './UI/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Pedidos from './Pages/Pedidos';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return(
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
