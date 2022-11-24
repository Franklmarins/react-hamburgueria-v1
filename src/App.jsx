import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { GlobalStyle } from "./styles/global";
import { Cart } from "./components/Cart";
import { Container } from "./styles/container";
import { ResultInfo } from "./components/ResultInfo";
import { api } from "./services/api";
import { StyledMain } from "./styles/main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
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
    if (value === "") {
      setFilteredProducts(products);
    }
  }, [products, value]);

  const showProducts = (search) => {
    setValue(search);
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const notification = (item) => {
    if (item === "add") {
      toast.success("Item adicionado com sucesso!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (item === "error") {
      toast.error("Você não pode adicionar itens iguais!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (item === "remove") {
      toast.info("Item removido!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleClick = (id) => {
    const sale = products.find((product) => product.id === id);
    if (currentSale.length === 0) {
      setCurrentSale([sale]);
      notification("add");
    } else {
      const item = currentSale.find((element) => element.id === id);
      item
        ? notification("error")
        : setCurrentSale([...currentSale, sale]) || notification("add");
    }
  };

  return (
    <>
      <div className="App">
        <GlobalStyle />

        <Header showProducts={showProducts} value={value} />
        <Container>
          <StyledMain>
            <ResultInfo value={value} setValue={setValue} />
            <ProductList
              filteredProducts={filteredProducts}
              handleClick={handleClick}
            />
          </StyledMain>
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            notification={notification}
          />
        </Container>
      </div>
      <ToastContainer />
    </>
  );
};
