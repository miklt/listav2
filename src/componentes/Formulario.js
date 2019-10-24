import React from 'react';
const Formulario = ({ onClick }) => {
  const [nome, setNome] = React.useState('');

  const onChange = event => {
    return setNome(event.target.value)
  }
  const enviarElimpar = () => {    
    onClick({ "nome": nome, "preco": "0.00" });    
    return setNome('');
  }

  return <div className="formulario">
    <input placeholder="digite o nome de um produto"
      type='text' value={nome} onChange={onChange}
      className="entradaProduto"></input>
    <button className="botaoAdicionar" onClick={() => enviarElimpar()} >+</button>
  </div>
}
export { Formulario };
