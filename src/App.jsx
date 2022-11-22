import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { GlobalStyle } from "./styles/global";
import { Cart } from "./components/Cart";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
