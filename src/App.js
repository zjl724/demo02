import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./pages/productList";

function App() {
  return (
    <div className="App">
      {/**商品列表 */}
      <ProductList></ProductList>
    </div>
  );
}

export default App;
