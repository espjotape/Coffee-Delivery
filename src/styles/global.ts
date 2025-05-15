import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
 }

 body {
  background: ${props => props.theme.COLORS.background};
  color: ${props => props.theme.COLORS["base-text"]};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`