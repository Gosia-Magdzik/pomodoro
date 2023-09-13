import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    text-align: center;
    margin: 0 auto;
    font-family: 'Antonio', sans-serif;
    background-color: #3b3162;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
    color: white;
    font-size: 32px;
    margin-top: 42px;
    line-height: 32px;

`;

