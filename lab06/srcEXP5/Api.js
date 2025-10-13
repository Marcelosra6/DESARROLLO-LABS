/* CICLO DE VIDA Y EXTRACCION DE DATOS (CLASE)  */
// import React, { Component } from "react";

// class Api extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [] // Estado inicial vacío
//     };
//   }

//   componentDidMount() {
//     Se ejecuta después de que el componente se monta
//     fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=ReactJS&format=json&origin=*")
//       .then(response => response.json())
//       .then(result => {
//         Actualiza el estado con los datos recibidos
//         this.setState({ data: result.query.search });
//       })
//       .catch(error => console.log("Error al obtener los datos:", error));
//   }

//   render() {
//     return (
//       <div>
//         <h2>Resultados de búsqueda de Wikipedia (ReactJS)</h2>
//         <ul>
//           {this.state.data.map((item, index) => (
//             <li key={index}>{item.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Api;
/* CONVERSION A HOOKS (OPCIONAL / AVANZADO) */
import React, { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState([]); // estado inicial vacío

  useEffect(() => {
    fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=ReactJS&format=json&origin=*")
      .then(response => response.json())
      .then(result => setData(result.query.search))
      .catch(error => console.log("Error al obtener los datos:", error));
  }, []); // arreglo vacío => se ejecuta una vez al montar el componente

  return (
    <div>
      <h2>Resultados de búsqueda (ReactJS)</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
