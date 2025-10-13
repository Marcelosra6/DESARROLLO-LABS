import './App.css';
import Table from './Table';
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
      ] 
    }; 
  } 

  render() {  
    return (  
      <div class="App">  
        <h1 class="text-center text-primary">Personajes</h1>  
        {} 
        <Table characterData={this.state.characters} />  
      </div>  
    );  
  }  
} 
export default App;
