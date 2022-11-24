import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 1169px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 10px;
    width: 100%;
    overflow: auto;
  }
`;
