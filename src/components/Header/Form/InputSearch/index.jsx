import React from "react";
import { StyledInput } from "../../../../styles/input";

export const InputSearch = ({ setValueInput }) => {
  return (
    <StyledInput
      type="search"
      placeholder="Digitar Pesquisa"
      onChange={(event) => {
        setValueInput(event.target.value);
      }}
    />
  );
};
