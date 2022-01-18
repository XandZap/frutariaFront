import React, { Fragment, useEffect, useState } from "react";
import ListagemScreen from "../../screen/listar";
import NavBar from "../../screen/navbar";
import "./style.css"

async function getFrutas() {
  let response = await fetch("http://localhost:3000/api/frutas.json");
  let data = await response.json();
  return data;
}

const Listagem = () => {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    getFrutas().then((data) => {
      setFrutas(data["frutas"]);
    });
  }, []);

  return (
    <div>
      <NavBar/>
      <h1 className="lista">Lista de produtos</h1>
      <div className="listagemScreen">
      {frutas.map((frutas, index) => (
        <ListagemScreen
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

export default Listagem;
