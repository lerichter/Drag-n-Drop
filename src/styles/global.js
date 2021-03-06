import { createGlobalStyle } from 'styled-components';
import BackgroundImg from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #040433;
    background-image: url(${BackgroundImg});
    text-rendering: optimizeLegibility;
    -webkit-font-smootihng: antialiased;
  }

  html, body, #root {
    height: 100%;
  }
`