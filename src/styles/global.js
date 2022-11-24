import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  span,
  li,
  button,
  input {
    font-family: "Inter", sans-serif;
  }
  


:root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;

  --grey-100: #333333;
  --grey-50: #828282;
  --grey-20: #e0e0e0;
  --grey-0: #f5f5f5;

  --negative: #e60000;
  --warning: #ffcd07;
  --sucess: #168821;
  --information: #155bcb;

  --font-size-1: 1.625rem; /* 26px */
  --font-size-2: 1.375rem; /* 22px */
  --font-size-3: 1.125rem; /* 18px */
  --font-size-4: 0.9375rem; /* 15px */
  --font-size-5: 0.875rem; /* 14px */
  --font-size-6: 0.75rem; /* 12px */

  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 400;
}
`;
