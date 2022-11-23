import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { GlobalStyle } from "./styles/global";
import { Cart } from "./components/Cart";
import { Container } from "./styles/container";
import { ResultInfo } from "./components/ResultInfo";
import { api } from "./services/api";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getList() {
      try {
        const response = await api.get();

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getList();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const showProducts = (value) => {
    setValue(value);
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
      <Container>
        <ResultInfo value={value} />
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
      </Container>
    </div>
  );
};
