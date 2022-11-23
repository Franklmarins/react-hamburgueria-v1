import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 100vw;
  overflow: auto;

  @media (max-width: 1169px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
