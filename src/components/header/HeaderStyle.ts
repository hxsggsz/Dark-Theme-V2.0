import styled from "styled-components";

export const HeaderTheme = styled.header`
   width: 100%;
   min-height: 5em;
   background: ${props => props.theme.colors.primary};
   border-radius: 2px;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
`;