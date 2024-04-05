import React, {useState} from 'react';
import { useCart } from "../Funciones/Carrito/Contexto";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Formulario = () => {

  const {cart,extractProductList} = useCart();
  
  const navigate = useNavigate();

  const [Datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    domicilio: ''
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    domicilio: ''
  });

      
  const Cancel = () => {
    navigate('/confirmacion');
  };

  const handleChange = (e) => {
    setDatos({
      ...Datos,
      [e.target.name]: e.target.value
    });
    // Limpiar el mensaje de error cuando el usuario comienza a escribir nuevamente
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;

    // Validación de campos
    const newErrors = { ...errors };

    Object.keys(Datos).forEach((key) => {
      if (Datos[key].trim() === '') {
        formValid = false;
        newErrors[key] = 'Este campo es requerido';
      }
    });

    if (!formValid) {
      setErrors(newErrors);
      return; // Evitar que se envíe el formulario si hay campos vacíos
    }

    // Recibimos los datos del pedido en el carrio y le asignamos el nombre
    const Pedido = extractProductList();
    const fecha = new Date();
    const fechaFormateada = `${fecha.getFullYear()}${(fecha.getMonth() + 1).toString().padStart(2, '0')}${fecha.getDate().toString().padStart(2, '0')}_${fecha.getHours().toString().padStart(2, '0')}${fecha.getMinutes().toString().padStart(2, '0')}${fecha.getSeconds().toString().padStart(2, '0')}`;
    const claveOrden = `${Datos.nombre}${Datos.apellidos}_${fechaFormateada}`;

    // Montamos todo junto
    const orden = {
      id_pedido: claveOrden,
      usuario: Datos,
      pedido: Pedido
    };

    console.log('orden: ', orden);

    //Posteamos en base de datos
    axios.post('https://web-app-dsm-react-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json', orden)
      .then((response) => {
        navigate(`/fin?clave=${claveOrden}`);
      })
      .catch((error) => {
        alert('Lamentablemente, ha habido un error a la hora de enviar el pedido. Por favor, intentelo de nuevo en unos instantes.');
      }
    );

  };

  if (cart.length > 0){
    return (
      <form className='formulario' onSubmit={handleSubmit}>
        <label>
          Nombre:  
          <input
            type="text"
            name="nombre"
            value={Datos.nombre}
            onChange={handleChange}
          />
        </label>
        {errors.nombre && <p className="error">{errors.nombre}</p>}
        <label>
          Apellidos:
          <input
            type="text"
            name="apellidos"
            value={Datos.apellidos}
            onChange={handleChange}
          />
        </label>
        {errors.apellidos && <p className="error">{errors.apellidos}</p>}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={Datos.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={Datos.telefono}
            onChange={handleChange}
          />
        </label>
        {errors.telefono && <p className="error">{errors.telefono}</p>}
        <label>
          Direccion de Entrega:
          <input
            type="text"
            name="domicilio"
            value={Datos.domicilio}
            onChange={handleChange}
          />
        </label>
        {errors.domicilio && <p className="error">{errors.domicilio}</p>}
        <div className='button-container' style={{paddingTop:'15px'}}>
          <Button onClick={Cancel}>Cancelar</Button>
          <Button type="submit">Realizar Pedido</Button>
        </div>
      </form>
    );
  }else{
      return(
          <div className="main-content">
              <h2 style={{color:'darkgray', padding:'5rem', paddingBottom:'0'}}>El carrito está vacío</h2>
              <div style={{color:'gray', padding:'5rem', paddingTop:'0'}}>Lo sentimos, ahora mismo tu carrito está vacío diríjase a <Link to='/'>nuestra tienda</Link> para elegir sus productos favoritos</div>
          </div>
      );
  }
};


export default Formulario;