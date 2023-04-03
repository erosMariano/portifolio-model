import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,html,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-family: "Poppins", sans-serif;
  }
  .container{
    max-width: 1032px;
    padding: 0 16px;
    width: 100%;
    margin: 0 auto;
  }
`;
