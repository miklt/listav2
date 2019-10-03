import React from 'react';
import {ProdutoEPreco} from './ProdutoEPreco'
const Lista = (props) => {  
    
    // <div className="lista">
    //   <ProdutoEPreco nomeProduto='1 L Leite' precoProduto='R$ 2,80'/>
    //   <ProdutoEPreco nomeProduto='1 cx bombons' precoProduto='R$ 8,20'/>
    //   <ProdutoEPreco nomeProduto='1 lt óleo' precoProduto='R$ 3,40'/>
    // </div>
    
  
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