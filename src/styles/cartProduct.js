import styled from "styled-components";

export const StyledCartProduct = styled.li`
  display: flex;
  width: 100%;
  position: relative;
  div:nth-child(1) {
    background: var(--grey-20);
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10px;
  }
  h3 {
    margin-top: 7px;
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-1);
    color: var(--grey-100);
  }
  span {
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-3);
    color: var(--grey-50);
  }
  button {
    position: absolute;
    top: 7px;
    right: 0;
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-2);
    color: #bdbdbd;
  }
  button:hover {
    text-decoration: underline;
    color: var(--grey-100);
  }
`;
