import React, {Fragment, useState, useContext} from 'react';


const Formulario = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    domicilio: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <label>
        Nombre:  
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Apellidos:
        <input
          type="text"
          name="apellido"
          value={formData.apellidos}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Direccion de Entrega:
        <input
          type="text"
          name="domicilio"
          value={formData.domicilio}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};


export default Formulario;