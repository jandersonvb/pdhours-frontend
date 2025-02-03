import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* roboto-regular - latin */
    @font-face {
      font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('../fonts/roboto-v47-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


  }
`

export default GlobalStyles
