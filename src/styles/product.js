import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
  height: 346px;
  border: 2px solid var(--grey-20);
  border-radius: 5px;

  div:nth-child(1) {
    background: var(--grey-0);
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100%;
  }
  div:nth-child(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    h3 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);
      color: var(--grey-100);
    }
    span {
      font-size: var(--font-size-6);
      font-weight: var(--font-weight-3);
      color: var(--grey-50);
    }
    p {
      font-size: 16px;
      font-weight: var(--font-weight-2);
      color: var(--color-primary);
    }
  }
`;
