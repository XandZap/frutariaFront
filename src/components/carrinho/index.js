import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../screen/navbar";
import "./style.css";

//Baixar api
async function getFrutas() {
  let response = await fetch("http://localhost:3000/api/frutas.json");
  let data = await response.json();
  return data;
}

const Carrinho = () => {
  const [frutas, setFrutas] = useState([]);
  //Quantidade de itens no carrinho
  const [quantidadeTipo, setQuantidadeTipo] = useState();
  //Frutas que estao no carrinho
  const [carrinho, setCarrinho] = useState([]);
  const [quantidadeItem, setQuantidadeItem] = useState([]);

  //Comparar localstorage com api e retorna para o carrinho
  const SetItems = async (frutas) => {
    let new_carrinho = [];
    let new_quantidade = [];
    await frutas.map((frutas) => {
      if (localStorage.getItem(frutas.id)) {
        new_carrinho.push(frutas);
        new_quantidade.push(localStorage.getItem("quantidade" + frutas.id));
        setQuantidadeItem(new_quantidade);
      }
    });
    return new_carrinho;
  };

  useEffect(() => {
    getFrutas().then((data) => {
      setFrutas(data["frutas"]);
    });
    setQuantidadeTipo(localStorage.length / 2);
  }, []);

  const mostrarCarrinho = () => {
    //seta o local storage em carrinho
    SetItems(frutas).then((new_carrinho) => setCarrinho(new_carrinho));
    setQuantidadeTipo(localStorage.length / 2);
  };

  const handleChange = (index,id) => (e) => {
    let nova_quantidade = [...quantidadeItem];
    nova_quantidade[index] = e.target.value;
    setQuantidadeItem(nova_quantidade);
    localStorage.setItem("quantidade" + id, e.target.value);
  };

  const removeItem = (index) => {
    localStorage.removeItem(index);
    localStorage.removeItem("quantidade" + index);
  };

  const clear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <NavBar />
      <div className="quantidade">Quantidade de items no carrinho: {quantidadeTipo}</div>
      <button className="button is-primary" onClick={mostrarCarrinho}>
        Mostrar Carrinho
      </button>
      <button className="button is-danger" onClick={clear}>
        Limpar Carrinho
      </button>
      <Link to={"/"}>
        <button className="button is-primary">Retornar ao inicio</button>
      </Link>
      <div className="carrinho">
        {carrinho.map((carrinho, index) => (
          <div className="column is-4">
            <div className="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 titulo">
                      {carrinho.name} X{" "}
                      <input
                        type="number"
                        value={quantidadeItem[index]}
                        min={1}
                        id="quantidade"
                        onChange={handleChange(index,carrinho.id)}
                      />
                    </p>
                    <p>Gênero: {carrinho.genus}</p>
                    <p>Família: {carrinho.family}</p>
                    <p>Ordem: {carrinho.order}</p>
                  </div>
                </div>
              </div>
              <div class="card nutricao">
                <div class="card-content">
                  <p class="title is-6">Nutrição:</p>

                  <ul>
                    <li>Carboidratos: {carrinho.nutritions.carbohydrates}</li>
                    <li>Proteínas: {carrinho.nutritions.protein}</li>
                    <li>Gordura: {carrinho.nutritions.fat}</li>
                    <li>Calorias: {carrinho.nutritions.calories}</li>
                    <li>Açúcar: {carrinho.nutritions.sugar}</li>
                  </ul>
                  <button
                    className="button is-danger"
                    onClick={() => {
                      localStorage.removeItem(carrinho.id);
                      localStorage.removeItem("quantidade" + carrinho.id);
                      mostrarCarrinho();
                    }}
                  >
                    Remover item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrinho;

/**/
