import React from 'react';
import {ProdutoEPreco} from './ProdutoEPreco'
const Lista = (props) => {  
    const prods = props
                  .listaProdutos
                  .map( t =>  
                    <ProdutoEPreco key={t.nome} 
                    nomeProduto={t.nome} 
                    precoProduto={t.preco}/>
                    )
    return <div className="lista">{prods}</div>
  }
export {Lista}