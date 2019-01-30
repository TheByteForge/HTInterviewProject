import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.fonts.primary};
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    text-rendering: optimizeLegibility;
  }

  body.fontLoaded {
    font-family: ${props => props.theme.fonts.primary};
  }

  #app {
    background-color: ${props => props.theme.colors.primary};
    min-height: 100%;
    min-width: 100%;
  }

  a{
    text-decoration: none;
  }
  
  p,
  label {
    ${props => props.theme.fonts.primary};
    font-weight: 400;
    line-height: 1.5em;
  }

`;

export default GlobalStyle;
