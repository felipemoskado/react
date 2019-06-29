import React from 'react';

import './lista-produtos.css';
import Produto from './produto';

const ListaProdutos = () =>
  <div className="container-vertical">
    <h1>Lista de Pedidos</h1>
    <Produto></Produto>
  </div>

export default ListaProdutos;