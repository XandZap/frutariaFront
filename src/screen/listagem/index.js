import React, { Fragment, useEffect, useState } from "react";
import Listagem from "../../components/listagem/index";
import NavBar from "../navbar/index";
import "./style.css"

//Baixar api do JSON
async function getFrutas() {
  let response = await fetch("http://localhost:3000/api/frutas.json");
  let data = await response.json();
  return data;
}

const ListagemScreen = () => {
  //JSON da Api
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    getFrutas().then((data) => {
      setFrutas(data["frutas"]);
    });
  }, []);

  return (
    <div>
      <NavBar/>
      <h1 className="title lista">Lista de produtos</h1>
      <div className="listagemScreen">
      {/*Listar todas as Frutas da api e enviar seus dados para components/listagem */}
      {frutas.map((frutas, index) => (
        <Listagem
          name={frutas.name}
          genus={frutas.genus}
          family={frutas.family}
          order={frutas.order}
          id={frutas.id}
          nutritions={frutas.nutritions}
        />
      ))}
      </div>
      
    </div>
  );
};

export default ListagemScreen;
