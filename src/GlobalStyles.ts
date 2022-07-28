import { createGlobalStyle } from 'styled-components';
import Roboto from '/assets/fonts/Roboto-Medium.ttf';

const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
    }

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0px;
    padding: 0px;
    }

    html,
    body {
    width: 100%;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    }
`;

export default GlobalStyle;
