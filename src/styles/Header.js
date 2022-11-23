import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--grey-0);
  padding: 1rem 0;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }
  @media (max-width: 550px) {
    div {
      flex-direction: column;
    }
  }
`;
