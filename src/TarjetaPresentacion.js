// TarjetaPresentacion.js
import { useHistory } from 'react-router-dom';
import React from 'react';

const TarjetaPresentacion = (props) => {
  const params = new URLSearchParams(props.location.search);
  const nombre = params.get('nombre');
  const edad = params.get('edad');
  const correo = params.get('correo');

  return (
    <div className="tarjeta">
      <h1>Tarjeta de Presentación</h1>
      <div>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Edad:</strong> {edad}</p>
        <p><strong>Correo:</strong> {correo}</p>
      </div>
    </div>
  );
}

export default TarjetaPresentacion;
