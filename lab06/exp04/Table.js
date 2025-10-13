import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { books, removeBook } = this.props;

    return (
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Año</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">No hay libros en el inventario.</td>
              </tr>
            ) : (
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeBook(book.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
