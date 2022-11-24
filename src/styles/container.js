import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 115px;
  transition: padding 1s linear;
  display: flex;
  gap: 20px;

  @media (max-width: 1169px) {
    padding: 15px;
    transition: padding 1s linear;
    flex-direction: column;
  }
`;
