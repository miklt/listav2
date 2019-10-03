import React from 'react';

import './App.css';
import {ListaProdutosEPrecos} from './DadosIniciais.js'
import {Titulo} from './componentes/Titulo'
import {Formulario} from './componentes/Formulario'
import {Lista} from './componentes/Lista'
import {Procurar} from './componentes/Procurar'

const App = () => (  
    <div className="conteiner">
      <Titulo/>
      <Formulario onClick= {() => adicionarProdutos({"nome":"caneta"})}/>
      <Lista listaProdutos={ListaProdutosEPrecos}/>
      <Procurar/>
    </div>
  );
function adicionarProdutos (produto) {  
  // adiciona um produto
  ListaProdutosEPrecos.push(produto)
}
function procurarPrecos (){
  // Atualiza os preços dos produtos
}


export default App;
