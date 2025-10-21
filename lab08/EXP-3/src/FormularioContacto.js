import React, { useState } from 'react';

function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  

    if (!email.includes('@') || !email.includes('.')) {
      setError('Ingrese bien tu correo');
      setExito('');
    } else {
      setExito('Ya está enviado tu formularito.');
      setError('');
    }
  };

  return (
    <div>
      <h2>Formulario para tu </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            placeholder="Mensaje de la nación"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {exito && <div style={{ color: 'green' }}>{exito}</div>}
    </div>
  );
}

export default FormularioContacto;
