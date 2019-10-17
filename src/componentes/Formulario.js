import React from 'react';
const Formulario = ({ onClick }) => {
  const [nome, setNome] = React.useState('');

  const onChange = event => {
    return setNome(event.target.value)
  }

  return <div className="formulario">
    <input placeholder="digite o nome de um produto"
      type='text' value={nome} onChange={onChange}
      className="entradaProduto"></input>
    <button className="botaoAdicionar" onClick={() => onClick({ "nome": nome, "preco": "0.00" })}>+</button>
  </div>
}
export { Formulario };
