import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      year: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'year') 
      {
      if (value === '' || /^\d*$/.test(value)) {
        this.setState({ [name]: value });
      }
    } else 
      {
      this.setState({ [name]: value });
    }
  }

  submitForm = () => {
    const { title, author, year } = this.state;

    const numericYear = parseInt(year, 10);
    if (Number.isNaN(numericYear) || numericYear <= 0) {
      alert('Introduce un año válido.');
      return;
    }

    this.props.onAddBook({
      title: title.trim(),
      author: author.trim(),
      year: numericYear
    });

    this.setState({ title: '', author: '', year: '' });
  }

  render() {
    return (
      <form className="mb-4">
        <div className="form-row">
          <div className="form-group col-md-5">
            <input name="title" value={this.state.title} onChange={this.handleChange} type="text" className="form-control" placeholder="Título del libro"/>
          </div>
          <div className="form-group col-md-4">
            <input name="author" value={this.state.author} onChange={this.handleChange} type="text" className="form-control" placeholder="Autor"/>
          </div>
          <div className="form-group col-md-2">
            <input name="year" value={this.state.year} onChange={this.handleChange} type="text" className="form-control" placeholder="Año"
            />
          </div>
          <div className="form-group col-md-1">
            <input type="button" className="btn btn-primary btn-block" value="Añadir" onClick={this.submitForm}/>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
