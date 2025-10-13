import React from 'react';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ productoData }) {
  return (
    <div class="table-responsive">
      <table class="table table-hover">
        <TableHeader />
        <TableBody productoData={productoData} />
      </table>
    </div>
  );
}

const TableHeader = () => { 
  return ( 
    <thead class="bg-warning"> 
      <tr> 
        <th>Nombre</th> 
        <th>Categoría</th> 
        <th>Precio</th> 
        <th>Stock</th> 
        <th>Proveedor</th> 
        <th>Fecha de Ingreso</th> 
      </tr> 
    </thead> 
  ); 
};

const TableBody = (props) => { 
  return ( 
    <tbody>
      {props.productoData.map((producto, index) => ( 
        <tr key={index}> 
          <td>{producto.nombre}</td> 
          <td>{producto.categoria}</td> 
          <td>{producto.precio}</td> 
          <td>{producto.stock}</td> 
          <td>{producto.proveedor}</td> 
          <td>{producto.fechaIngreso}</td> 
        </tr> 
      ))} 
    </tbody> 
  ); 
};

export default Table;
