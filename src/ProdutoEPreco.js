import React from 'react';
const ProdutoEPreco = (props) => (
    <div className='produtoEPreco'>
      <div className='produto'>{props.nomeProduto}</div>
      <div className='preco'>{props.precoProduto}</div>
    </div>  
)
export {ProdutoEPreco}