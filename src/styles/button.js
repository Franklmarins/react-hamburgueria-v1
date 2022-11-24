import styled from "styled-components";

export const StyledButtonDefault = styled.button`
  background: var(${({ bgColor }) => bgColor});
  color: var(${({ textColor }) => textColor});
  padding: 0 20px;
  height: 60px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: var(
      ${({ bgColor }) =>
        bgColor === "--color-primary" ? "--color-primary-50" : "--grey-50"}
    );
    color: var(
      ${({ textColor }) =>
        textColor === "--grey-50" ? "--grey-20" : textColor}
    );
  }
`;

export const StyledButtonMedium = styled.button`
  background: var(${({ bgColor }) => bgColor});
  color: var(${({ textColor }) => textColor});
  padding: 0 20px;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: var(
      ${({ bgColor }) =>
        bgColor === "--color-primary" ? "--color-primary-50" : "--grey-50"}
    );
    color: var(
      ${({ textColor }) =>
        textColor === "--grey-50" ? "--grey-20" : textColor}
    );
  }
`;
