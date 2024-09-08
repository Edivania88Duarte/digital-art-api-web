import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Playwrite CU", cursive;
    }

    body {
        position: relative;
        background: url('/src/assets/artesDigitais04.png') no-repeat center center fixed;
        background-size: cover;
        background-size: 75%;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        z-index: -1; 
    }


`