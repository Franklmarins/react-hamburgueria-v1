import React from "react";
import { Product } from "./Product";

export const ProductList = ({ filteredProducts, handleClick }) => {
  return (
    <ul>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </ul>
  );
};
