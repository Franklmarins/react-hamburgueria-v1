import styled from "styled-components";

export const StyledResultInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;

  h1 {
    margin-top: 15px;
    margin-bottom: 30px;
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-1);
    color: var(--grey-100);
  }
  span {
    color: var(--grey-50);
  }
`;
