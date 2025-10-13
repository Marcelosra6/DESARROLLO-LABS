import React, { Component } from 'react'; 
import './Table.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

 
class Table extends Component { 
    render() { 
        return ( 
            <div class="table-container mt-4">
                <div class ="table-responsive rounded-3 shadow-sm"> 
                <table class="table table-hover table-borderless mb-0"> 
                    <TableHeader /> 
                    <TableBody characterData={this.props.characterData} /> 
                </table> 
            </div> 
            </div>
            
        ); 
    } 
} 

const TableHeader = () => { 
    return ( 
        <thead class=""> 
            <tr> 
                <th class="text-center py-3 fs-5">Nombre</th> 
                <th class="text-center py-3 fs-5">Trabajo</th> 
            </tr> 
        </thead> 
    ); 
}; 

 

const TableBody = (props) => { 
    return ( 
        <tbody> 
            {props.characterData.map((character, index) => ( 
                <tr key={index} class="table-row align-middle"> 
                    <td class="text-center py-3">{character.name}</td> 
                    <td class="text-center py-3">{character.job}</td> 
                </tr> 
            ))} 
        </tbody> 
    ); 
}; 
export default Table; 