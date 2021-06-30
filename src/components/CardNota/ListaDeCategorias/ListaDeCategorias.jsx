import React, { Component } from 'react';

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key === 'Enter') {
      console.log(e);
    }
  }

  render() {
    return (
      <section>
        <ul>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
        </ul>
        <input type="text" onKeyUp={this._handleEventoInput.bind(this)} />
      </section>
    );
  }
}

export default ListaDeCategorias;
