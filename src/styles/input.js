import styled from "styled-components";

export const StyledInput = styled.input`
  max-width: 365px;
  height: 60px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--grey-20);
  padding: 20px 15px;
  font-size: 16px;

  &:focus {
    border: 2px solid var(--grey-100);
    outline: none;
    ::placeholder {
      color: var(--grey-50);
    }
  }

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: var(--grey-20);
  }
`;
