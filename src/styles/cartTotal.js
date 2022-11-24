import styled from "styled-components";

export const StyledCartTotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;

  div {
    border-top: 2px solid var(--grey-20);
    display: flex;
    justify-content: space-between;
  }
  h4 {
    margin-top: 20px;
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-2);
    color: var(--grey-100);
  }
  span {
    margin-top: 20px;
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-2);
    color: var(--grey-50);
  }
`;
