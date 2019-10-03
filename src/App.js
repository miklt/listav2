import React from 'react';

import './App.css';
import {ListaProdutosEPrecos} from './DadosIniciais.js'
import {Titulo} from './componentes/Titulo'
import {Formulario} from './componentes/Formulario'
import {Lista} from './componentes/Lista'
import {Procurar} from './componentes/Procurar'

const App = () => {  
  const [produtos, setProdutos] = React.useState(ListaProdutosEPrecos);
  const [produto, setProduto] = React.useState({"nome":"a","preco":"3"});

    const adicionarProdutos = (produto) => {  
      console.log("produto>",produto);
      setProdutos([...produtos,produto]);
      console.log("#produtos:", produtos.length);      
    }
    React.useEffect ( () => setProdutos(produtos),[produtos]);
    
    return <div className="conteiner">
      <Titulo/>
      <Formulario produto={produto} onClick={adicionarProdutos}/>
      <Lista listaProdutos={produtos}/>
      <Procurar/>
    </div>
}

function procurarPrecos (){
  // Atualiza os preços dos produtos
}


export default App;
