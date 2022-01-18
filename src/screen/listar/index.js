import React, { useState } from "react";


const ListagemScreen = (props) => {
  const [carrinho, setCarrinho] = useState(props);
  const [quantidade, setQuantidade] = useState(1);

  function AddCarrinho(produto, quantidade) {
    localStorage.setItem( produto.id, produto.name);
    localStorage.setItem("quantidade" + produto.id, quantidade);
  }

  const buttonClick = () => {
    if (quantidade && carrinho.id) {
      AddCarrinho(carrinho, quantidade);
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.name}</p>
          </div>
        </div>

        <div className="content">
          Categorias
          <ul>
            <li>Gênero: {props.genus}</li>
            <li>Família: {props.family}</li>
            <li>Ordem: {props.order}</li>
          </ul>
          <label>Quantidade: </label>
          <input
            type="number"
            value={quantidade}
            min={1}
            id="quantidade"
            onChange={(e) => setQuantidade(e.target.value)}
          />
          <button className="button" type="button" onClick={buttonClick}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
  
  
};

export default ListagemScreen;
