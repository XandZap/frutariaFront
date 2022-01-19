import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ListagemScreen from "../src/screen/listagem/index";
import Carrinho from "./components/carrinho";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ListagemScreen />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  </Router>
);

export default App;
