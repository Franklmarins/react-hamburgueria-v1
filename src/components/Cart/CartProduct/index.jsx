import React from "react";
import { StyledCartProduct } from "../../../styles/cartProduct";

export const CartProduct = ({ product, removeProduct }) => {
  return (
    <StyledCartProduct>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h3>
          {product.name.length > 9
            ? product.name.substr(0, 9) + "..."
            : product.name}
        </h3>
        <span>{product.category}</span>
      </div>
      <button
        onClick={() => {
          removeProduct(product.id);
        }}
      >
        Remover
      </button>
    </StyledCartProduct>
  );
};
