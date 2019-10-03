import React from 'react';

import './App.css';
import {ListaProdutosEPrecos} from './DadosIniciais.js'

const Titulo = () => (
  <div className="titulo">
    Lista de Compras
  </div>
)

const Formulario = () => (
  <div className="formulario">
  <input placeholder="digite o produto e 
  a quantidade" type='text' className="entradaProduto"></input>
  <button className="botaoAdicionar">+</button>
  </div>
)
const ProdutoEPreco = (props) => (
  <div className='produtoEPreco'>
    <div className='produto'>{props.nomeProduto}</div>
    <div className='preco'>{props.precoProduto}</div>
  </div>
  
)
const Lista = (props) => {  
  /*
  <div className="lista">
    <ProdutoEPreco nomeProduto='1 L Leite' precoProduto='R$ 2,80'/>
    <ProdutoEPreco nomeProduto='1 cx bombons' precoProduto='R$ 8,20'/>
    <ProdutoEPreco nomeProduto='1 lt óleo' precoProduto='R$ 3,40'/>
  </div>
  */

  const prods = props
                .listaProdutos
                .map( t =>  
                  <ProdutoEPreco key={t.nome} 
                  nomeProduto={t.nome} 
                  precoProduto={t.preco}/>
                  )   
  return <div className="lista">{prods}</div>
}

const Procurar = () => (
  <button className="procurar">Procurar</button>
)

const App = () => (
  
    <div className="conteiner">
      <Titulo/>
      <Formulario/>
      <Lista listaProdutos={ListaProdutosEPrecos}/>
      <Procurar/>
    </div>
  );


export default App;
