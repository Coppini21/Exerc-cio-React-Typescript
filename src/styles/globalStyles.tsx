import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        background-color: HSL(196, 59%, 66%);
        
    }
    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;