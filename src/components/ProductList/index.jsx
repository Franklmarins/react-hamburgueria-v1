import React from "react";
import { Container } from "../../styles/container";
import { StyledUl } from "../../styles/productList";
import { Product } from "./Product";

export const ProductList = ({ filteredProducts, handleClick }) => {
  return (
    <div>
      <StyledUl>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </StyledUl>
    </div>
  );
};
