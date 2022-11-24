import styled from "styled-components";

export const StyledCart = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  background: var(--grey-0);
  width: 30%;
  height: fit-content;
  margin-top: 30px;

  .cart-title {
    padding: 18px 20px;
    height: 65px;
    background: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    color: #ffffff;
  }
  ul {
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .cart-no-item {
    padding: 50px 10px;
    text-align: center;
    h3 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-1);
      color: var(--grey-100);
    }
    p {
      margin-top: 15px;
      font-size: var(--font-size-5);
      font-weight: var(--font-weight-3);
      color: var(--grey-50);
    }
  }
  @media (max-width: 1169px) {
    width: 100%;
    margin-top: 0;
  }
`;
