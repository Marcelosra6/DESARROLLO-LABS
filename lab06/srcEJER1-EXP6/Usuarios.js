import React, { useEffect, useState } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error al obtener los usuarios:", error));
  }, []);

  return (
    <div className="user-list">
      <h2>Lista de Usuarios</h2>
      {usuarios.length === 0 ? (
        <p>Cargando usuarios...</p>
      ) : (
        <ul>
          {usuarios.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong>  
              <br />
              📧 {user.email}
              <br />
              🏢 {user.company.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Usuarios;
