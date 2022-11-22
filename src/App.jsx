import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { GlobalStyle } from "./styles/global";
import { Cart } from "./components/Cart";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((prod) => prod.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err));
  }, []);

  const showProducts = (value) => {
    if (value === "") {
      setFilteredProducts(products);
    }
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(value.toLowerCase()) ||
          product.category.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleClick = (id) => {
    const sale = products.find((product) => product.id === id);

    currentSale
      ? setCurrentSale([...currentSale, sale])
      : setCurrentSale([sale]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header showProducts={showProducts} />
      <div>
        <ProductList
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
};
