import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setEnviado(true);
  };

  return (
    <div className="form-container">
      <h2>Formulario de Contacto</h2>

      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>✅ ¡Gracias, {nombre}! Tu mensaje fue enviado correctamente.</p>
      )}
    </div>
  );
}

export default Formulario;
