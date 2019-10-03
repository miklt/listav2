import React from 'react';

import './App.css';

const Titulo = () => (
  <div className="titulo">
    Lista de Compras
  </div>
)
const Formulario = () => (
  <div className="formulario">
  <input type='text' className="entradaProduto"></input>
  <buton className="botaoAdicionar">+</buton>
  </div>
)
const Lista = () => (
  <div className="lista"></div>
)
const Procurar = () => (
  <div className="procurar"></div>
)

const App = () => (
  
    <div className="conteiner">
      <Titulo/>
      <Formulario/>
      <Lista/>
      <Procurar/>
    </div>
  );


export default App;
