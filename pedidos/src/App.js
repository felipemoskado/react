import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ListaProdutos from './produtos/lista-produtos';
import CadastroProduto from './produtos/cadastro-produto';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </header>
        <BrowserRouter>
          <Route path='/' exact={true} component={ListaProdutos}/>
          <Route path='/cadastro' component={CadastroProduto}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
