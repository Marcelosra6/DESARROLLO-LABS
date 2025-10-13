import React, { Component } from 'react'; 
import './Table.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
 
function Table({ mascotaData }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <TableHeader />
        <TableBody mascotaData={mascotaData} />
      </table>
    </div>
  );
}

const TableHeader = () => { 
    return ( 
        <thead class="bg-warning"> 
            <tr> 
                <th >Nombre</th> 
                <th >Propietario</th> 
                <th >Especie</th> 
                <th >Raza</th> 
                <th >Sexo</th> 
                <th >Fecha de Nacimiento</th> 
                <th >Fecha de Muerte</th> 
            </tr> 
        </thead> 
    ); 
}; 
const TableBody = (props) => { 
    return ( 
        <tbody>
            {props.mascotaData.map((mascota, index) => ( 
                <tr key={index}> 
                    <td>{mascota.nombre}</td> 
                    <td>{mascota.propietario}</td> 
                    <td>{mascota.especie}</td> 
                    <td>{mascota.raza}</td> 
                    <td>{mascota.sexo}</td> 
                    <td>{mascota.fechanas}</td> 
                    <td>{mascota.fechamuerte}</td> 
                </tr> 
            ))} 
        </tbody> 
    ); 
}; 
export default Table; 