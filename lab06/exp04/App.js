import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: this.makeId(), title: 'El Principito', author: 'Antoine', year: 1943 },
        { id: this.makeId(), title: '1984', author: 'Orwell', year: 1949 }
      ]
    };
  }

  makeId = () => {
    return `${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;
  };

  handleAddBook = (bookData) => {
    const newBook = { id: this.makeId(), ...bookData };
    this.setState((prevState) => ({
      books: [...prevState.books, newBook]
    }));
  };

  removeBook = (idToRemove) => {
    this.setState((prevState) => ({
      books: prevState.books.filter(book => book.id !== idToRemove)
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Inventario de Libros</h1>

        <Form onAddBook={this.handleAddBook} />
        <Table books={this.state.books} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default App;
