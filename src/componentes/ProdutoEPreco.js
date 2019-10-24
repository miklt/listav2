import React from 'react';
const ProdutoEPreco = (props) => (
    <div className='produtoEPreco' onClick={() =>props.onClick({"nome":props.nomeProduto})}>
      <div className='produto'>{props.nomeProduto}</div>
      <div className='preco'>R${props.precoProduto}</div>      
    </div>  
)
export {ProdutoEPreco}