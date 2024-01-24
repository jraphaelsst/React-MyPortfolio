import { createGlobalStyle } from 'styled-components'

export const color = {
  // Background colors
  bgPrimary: '#cdcdcd',
  bgSecondary: '#e2e1e1',

  // Font colors
  fontPrimary: '#446',
  fontSecondary: '#5e5e70',
  fontAlternative: '#ddd',

  // Main colors
  main: '#101215',
  primary: 'rgb(27, 36, 47)',
  secondary: 'rgb(0, 152, 155)',
  terciary: 'rgb(0, 180, 185)',

  // Pink pastel
  support: 'rgb(224, 24, 100)'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background-color: ${color.main};
    color: ${color.fontPrimary};
  }

  a {
    color: ${color.fontPrimary};
  }

  .sticky-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
`
