import React from "react";

export const CartTotal = ({ cartTotal, setCurrentSale }) => {
  return (
    <div>
      <div>
        <h4>Total</h4>
        <span>
          {cartTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button
        onClick={() => {
          setCurrentSale(null);
        }}
      >
        Remover todos
      </button>
    </div>
  );
};
