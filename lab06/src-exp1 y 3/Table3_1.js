import React, { Component } from 'react'; 
import './Table.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

class Table extends Component { 
    render() { 
        return ( 
            <div class ="table-responsive "> 
                <table class="table table-hover "> 
                    <TableHeader /> 
                    <TableBody characterData={this.props.characterData} /> 
                </table> 
            </div> 
        ); 
    } 
} 

const TableHeader = () => { 
    return ( 
        <thead class="bg-warning"> 
            <tr> 
                <th >Productos</th> 
                <th >Trabajo</th> 
            </tr> 
        </thead> 
    ); 
}; 

const TableBody = (props) => { 
    return ( 
        <tbody> 
            {props.characterData.map((character, index) => ( 
                <tr key={index}> 
                    <td>{character.name}</td> 
                    <td>{character.job}</td> 
                </tr> 
            ))} 
        </tbody> 
    ); 
}; 
export default Table; 