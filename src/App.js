import React from 'react';

import './App.css';
import {ListaProdutosEPrecos} from './DadosIniciais.js'
import {Titulo} from './Titulo'
import {Formulario} from './Formulario'
import {Lista} from './Lista'
import {Procurar} from './Procurar'

const App = () => (  
    <div className="conteiner">
      <Titulo/>
      <Formulario/>
      <Lista listaProdutos={ListaProdutosEPrecos}/>
      <Procurar/>
    </div>
  );


export default App;
