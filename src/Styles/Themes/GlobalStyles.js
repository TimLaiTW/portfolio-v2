import { createGlobalStyle} from "styled-components"
const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.10s linear;
  }

  header {
    color: ${({ theme }) => theme.header};
  }  

  p {
    color: ${({ theme }) => theme.text};
  }
  `
  export default GlobalStyles;