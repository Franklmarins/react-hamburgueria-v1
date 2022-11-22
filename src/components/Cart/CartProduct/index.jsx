import React from "react";

export const CartProduct = ({ product, removeProduct }) => {
  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <div>
        <h4>{product.name}</h4>
        <button
          onClick={() => {
            removeProduct(product.id);
          }}
        >
          Remover
        </button>
      </div>
      <span>{product.category}</span>
    </li>
  );
};
