import React from "react";
import { StyledButtonDefault } from "../../../styles/button";
import { StyledCartTotalDiv } from "../../../styles/cartTotal";

export const CartTotal = ({ cartTotal, setCurrentSale }) => {
  return (
    <StyledCartTotalDiv>
      <div>
        <h4>Total</h4>
        <span>
          {cartTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <StyledButtonDefault
        bgColor="--grey-20"
        textColor="--grey-50"
        onClick={() => {
          setCurrentSale([]);
        }}
      >
        Remover todos
      </StyledButtonDefault>
    </StyledCartTotalDiv>
  );
};
