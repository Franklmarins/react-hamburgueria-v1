import React from "react";

export const InputSearch = ({ setValueInput }) => {
  return (
    <input
      type="search"
      placeholder="Digitar Pesquisa"
      onChange={(event) => {
        setValueInput(event.target.value);
      }}
    />
  );
};
