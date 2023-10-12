import React from "react";
import ProductList from "./components/ProductList";
const productsData = [
  {id: 1, name: 'Product 1', price: 10 },
  {id: 2, name: 'Product 2', price: 20 },
  {id: 3, name: 'Product 3', price: 30 },
];
function App() {
  return (
    <div>
     <h1>Shopping App</h1> 
     <ProductList products={productsData}/>
    </div>
  );
}

export default App;
