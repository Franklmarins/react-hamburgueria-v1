import React from "react";
import { StyledButtonMedium } from "../../styles/button";
import { StyledResultInfo } from "../../styles/ResultInfo";

export const ResultInfo = ({ value, setValue }) => {
  const clearValue = () => {
    setValue("");
  };

  return (
    <StyledResultInfo>
      {value != "" ? (
        <>
          <h1>
            Resultado para: <span>{value}</span>
          </h1>
          <StyledButtonMedium
            onClick={clearValue}
            bgColor="--color-primary"
            textColor="--grey-0"
          >
            Limpar Lista
          </StyledButtonMedium>
        </>
      ) : null}
    </StyledResultInfo>
  );
};
