import React from "react";
import { StyledButtonMedium } from "../../../styles/button";
import { StyledLi } from "../../../styles/product";

export const Product = ({ product, handleClick }) => {
  return (
    <StyledLi>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <StyledButtonMedium
          bgColor="--color-primary"
          textColor="--grey-0"
          onClick={() => {
            handleClick(product.id);
          }}
        >
          Adicionar
        </StyledButtonMedium>
      </div>
    </StyledLi>
  );
};
