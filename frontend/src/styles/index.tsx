import { createGlobalStyle } from 'styled-components'

export const color = {
  // Background colors
  bgPrimary: '#f5',
  bgSecondary: '#fff',

  // Font colors
  fontPrimary: '#446',
  fontSecondary: '#5e5e70',
  fontAlternative: '#ddd',

  // Main colors
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
    background-color: ${color.bgPrimary};
    color: ${color.fontPrimary};
  }
`
