import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #1f506e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  a {
    color: #EDEDED;
    text-decoration: none;
    position: relative;
    width: 100%;
    border-bottom: 2px dotted #EDEDED;
    transition-timing-function: ease;
    transition-duration: 200ms;
  }

  a:hover {
    border-bottom: 2px dotted transparent;
  }

  a:before {
    content: "";
    background-color: #EDEDED;
    visibility: hidden;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out 0s;
    transform: scaleX(0);
}

a:hover:before {
  visibility: visible;
  transform: scaleX(1);
}
`

export default GlobalStyle
