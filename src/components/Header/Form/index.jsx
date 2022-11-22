import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { InputSearch } from "./InputSearch";

export const Form = ({ showProducts }) => {
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    valueInput === "" ? showProducts("") : showProducts(valueInput);
  }, [valueInput]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setValueInput(valueInput);
      }}
    >
      <InputSearch setValueInput={setValueInput} />
      <Button />
    </form>
  );
};
