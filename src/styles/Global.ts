import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
   }

   body {
      background: ${props => props.theme.colors.background};
      font-family: Arial, Helvetica, sans-serif;
   }
`;