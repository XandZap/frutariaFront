import React from "react";
import Listagem from "./components/listagem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Carrinho from "./components/carrinho";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Listagem />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  </Router>
);

export default App;
