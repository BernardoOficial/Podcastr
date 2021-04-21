import { createGlobalStyle } from "styled-components"

// BREAKPOINTS
export const breakPointDesktopBig = "1800px";
export const breakPointDesktop = "1800px";
export const breakPointTabletLandscape = "1350px";
export const breakPointTabletPortrait = "1170px";
export const breakPointMobileLandscape = "850px";
export const breakPointMobilePortrait = "600px";
export const breakPointMobilePortraitReduced = "420px";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #FFF;

        --gray-50: #F7F8FA;
        --gray-100: #E6E8EB;
        --gray-200: #AFB2B1;
        --gray-500: #808080;
        --gray-800: #494D4B;

        --green-500: #04D361;
        
        --purple-300: #9F75FF;
        --purple-400: #9164FA; 
        --purple-500: #8257E5;
        --purple-800: #6F48C9;
    }

    html {
        font-size: 100%;
        @media (max-width: ${breakPointTabletLandscape}) {
            font-size: 93.75%;
        }
        @media (max-width: ${breakPointTabletPortrait}) {
            font-size: 87.5%;
        }
        @media (max-width: ${breakPointMobilePortrait}) {
            font-size: 81.25%;
        }
    }

    body {
        background-color: var(---gray-50);
    }

    body, input, button, textarea {
        font-family: Inter, sans-serif;
        font-weight: 500;
        color: var(---gray-50);
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: Lexend, sans-serif;
        font-weight: 600;
        color: var(---gray-800);
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
    }

    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        border: none;
        outline: 0;
    }
`;

export default GlobalStyle;