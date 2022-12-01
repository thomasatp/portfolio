import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
    
    html {
        font: 10px 'Helvetica Neue', Arial, sans-serif;
        background: #ffffff;
        color: #111111;
    }

    .title {
        font-size: 1.81vw;
        font-weight: 400;
        line-height: 1.4;
        width: 100%;
        margin-bottom: 3.2rem;
        width: 50%;
    }

    .body {
        font-size: 1.8rem;
    }

    .link {
      cursor: pointer;
      color: #111111;
      font-size: 1.6rem;
      text-decoration: none;
    }
`;
