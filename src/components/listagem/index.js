import React, { useState } from "react";

const Listagem = (props) => {
  //Carrinho recebe os dados passados para ser comparado
  const [carrinho, setCarrinho] = useState(props);
  //Quantidade de produtos para colocar no carrinho
  const [quantidade, setQuantidade] = useState(1);
  //state para mostrar que o item foi adicionado
  const [adicionado, setAdicionado] = useState(false);

  
  function AddCarrinho(produto, quantidade) {
    localStorage.setItem(produto.id, produto.name); //Coloca o id e o nome da fruta no localstorage
    localStorage.setItem("quantidade" + produto.id, quantidade); //Coloca a quantidade de item no id da fruta no localstorage
    setAdicionado(!adicionado); //Muda para mostrar que o item foi adicionado
    setTimeout(() => setAdicionado(adicionado), 1500); //Intervalo para sair a mensagem
  }

  const buttonClick = () => {
    //Verifica se existe quantidade e se existe id da fruta para nao adicionar undefined
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
          {/*Mensagem que mostra ao adicionar no carrinho */}
          {adicionado && <span class="tag is-info adicionado">Item adicionado</span>}
        </div>
      </div>
    </div>
  );
};

export default Listagem;
