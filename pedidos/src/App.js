import React from 'react';

import ListaProdutos from './produtos/lista-produtos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <ListaProdutos></ListaProdutos>
    </div>
  );
}

export default App;
