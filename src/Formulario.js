import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState('');
  const [inputEdad, cambiarInputEdad] = useState('');
  const [inputCorreo, cambiarInputCorreo] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario si es necesario

    // Redirigir a la página de tarjeta de presentación con los datos del formulario
    history.push(`/tarjeta?nombre=${inputNombre}&edad=${inputEdad}&correo=${inputCorreo}`);
  }

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  }

  const handleInputEdad = (e) => {
    cambiarInputEdad(e.target.value);
  }

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  }

  return (
    <form action="" onSubmit={handleSubmit} className="formulario">
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={inputNombre}
          onChange={handleInputNombre}
          className="form-control"
          placeholder="Nombre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          name="edad"
          id="edad"
          value={inputEdad}
          onChange={handleInputEdad}
          className="form-control"
          placeholder="Edad"
        />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          name="correo"
          id="correo"
          value={inputCorreo}
          onChange={handleInputCorreo}
          className="form-control"
          placeholder="Correo"
        />
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Formulario;
