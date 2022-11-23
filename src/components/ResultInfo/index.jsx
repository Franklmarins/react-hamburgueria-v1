import React from "react";
import { StyledResultInfo } from "../../styles/ResultInfo";

export const ResultInfo = ({ value }) => {
  return value != "" ? (
    <StyledResultInfo>
      Resultado para: <span>{value}</span>
    </StyledResultInfo>
  ) : null;
};
