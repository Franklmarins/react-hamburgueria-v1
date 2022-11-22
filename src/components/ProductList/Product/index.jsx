import React from "react";

export const Product = ({ product, handleClick }) => {
  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          onClick={() => {
            handleClick(product.id);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
