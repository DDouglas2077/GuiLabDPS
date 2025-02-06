import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";

// Componente raíz que usa ProductList
const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Tienda Virtual</h1>
      <ProductList />
    </div>
  );
};

export default App;
