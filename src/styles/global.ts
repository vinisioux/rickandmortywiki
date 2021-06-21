import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #FFFFFF;
    --gray: #212121;
    --white: #FFFFFF;
    --red: #f33c39;
    --black: #000000;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    height: 100%;
  }

  body {
    height: 100%;
    background: var(--background);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #root {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #root {
    height: 100%;
  }

  body, input, button {
    font: 1.4rem "Lato", sans-serif;
    line-height: 1.48;
  }
 
  button {
    cursor: pointer;
    border: 0;
    background: 0;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
`;
