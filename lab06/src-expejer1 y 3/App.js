import './App.css';
import Table from './Table';
import Table31 from './Table3_1';
import Table32 from './Table3_2';
import React, { Component } from 'react';

class App extends Component {  
  constructor(props) { 
    super(props); 
    this.state = { 
      characters: [ 
        { name: 'Marcelo', job: 'Desarrollador Front-End' }, 
        { name: 'Abby', job: 'Desarrollador Back-End' }, 
        { name: 'Reggy', job: 'Desarrollador Full-Stack' }, 
        { name: 'Fred', job: 'Diseñador de la DB' }, 
        { name: 'Reggy', job: 'Supervisor' } 
      ],
      productos: [
        { nombre: 'Zapatillas', categoria: 'Calzado', precio: 500, stock: 10, proveedor: 'Osiris', fechaIngreso: '2024-08-10' },
        { nombre: 'Hoodie', categoria: 'Ropa', precio: 350, stock: 20, proveedor: 'Trasher', fechaIngreso: '2024-09-01' },
        { nombre: 'Polo', categoria: 'Ropa', precio: 60, stock: 50, proveedor: 'Ralph Lauren', fechaIngreso: '2024-07-15' },
        { nombre: 'Jeans', categoria: 'Pantalones', precio: 180, stock: 15, proveedor: 'Dickies', fechaIngreso: '2024-06-22' },
      ],
      mascotas: [
         { nombre: 'Ringo', propietario: 'Marcelo', especie: 'Perro', raza: 'Salchicha', sexo: 'M', fechanas: '2021-01-14', fechamuerte: '-' },
        { nombre: 'Chop', propietario: 'Fernando', especie: 'Perro', raza: 'Rottweiler', sexo: 'M', fechanas: '2018-07-07', fechamuerte: '-' },
        { nombre: 'Everest', propietario: 'Matias', especie: 'Gato', raza: 'Blanco y negro', sexo: 'M', fechanas: '2025-08-12', fechamuerte: '-' },
        { nombre: 'Dumbo', propietario: 'Axel', especie: 'Perro', raza: 'Chusco', sexo: 'M', fechanas: '2011-03-25', fechamuerte: '2021-12-01' },
      ]
    }; 
  } 

  render() {  
    return (  
      <div class="App container mt-4" >  
        <h1 clas="text-center text-primary mb-4">Personajes</h1>  
        <Table characterData={this.state.characters} />  
        <h1 class="text-center text-success mt-5 mb-4">Productos</h1>
        <Table31 productoData={this.state.productos} />  
        <h1 class="text-center text-warning mt-5 mb-4">Mascotas</h1>
        <Table32 mascotaData={this.state.mascotas} />  
      </div>  
    );  
  }  
} 

export default App;
