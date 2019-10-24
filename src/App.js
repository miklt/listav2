import React from 'react';

import './App.css';
import { PRECOS } from './DadosIniciais.js'
import { Titulo } from './componentes/Titulo'
import { Formulario } from './componentes/Formulario'
import { Lista } from './componentes/Lista'
import { Procurar } from './componentes/Procurar'

const App = () => {
  const [produtos, setProdutos] = React.useState([]);  

  const adicionarProdutos = (produto) => {
    if (produto && produto.nome.length > 3) {
      const obj = produtos.find(x => x.nome === produto.nome);
      if (!obj) {
        setProdutos([...produtos, produto]);
      }
    }
  }
  
  const procurarPreco = (produto) => {
    const r = PRECOS
      .find(
        x => x.produto
          .nome.toLocaleLowerCase()
          .includes(
            produto.nome
              .toLocaleLowerCase()
          )
      );
    if (r){
      return r.comum;
    } else {
      return 0.00;
    }

  }
  const procurarPrecos = () => {
    const pes = produtos.map(t => {
      const preco = procurarPreco(t);
      if (preco) {
        t.preco = preco;
      }
      return t;
    }
    );
    setProdutos(pes);
  }

  const removerProduto = (produto) => {    
    let pes = produtos.filter( t =>{      
      return !(t.nome === produto.nome);
    });
    setProdutos(pes);
  }
  React.useEffect(() => setProdutos(produtos), [produtos]);

  return <div className="conteiner">
    <Titulo />
    <Formulario onClick={adicionarProdutos}/>
    <Lista listaProdutos={produtos} onClick={removerProduto} />
    <Procurar onClick={procurarPrecos} />
  </div>
}

// function procurarPrecos() {
  // Atualiza os preços dos produtos
// }


export default App;
