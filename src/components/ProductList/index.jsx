import React from "react";
import { StyledUl } from "../../styles/productList";
import { Product } from "./Product";

export const ProductList = ({ filteredProducts, handleClick }) => {
  return (
    <>
      <StyledUl>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </StyledUl>
    </>
  );
};
