import styled from "styled-components";


export const FooterStyle = styled.footer`
   bottom: 0;
   position: absolute;
   width: 100%;
   text-align: center;	
   min-height: 5em;
   background: ${props => props.theme.colors.primary};
   color:${props => props.theme.colors.textSecondary};
   border-radius: 2px;  
   box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.2);
`;

export const Icons = styled.i`
   .devicon-linkedin-plain, .devicon-github-original {
      padding: 5px;
      margin: 5px;
      color: ${props => props.theme.colors.secondary};
   }
   
   .devicon-linkedin-plain:hover, .devicon-github-original:hover {
      color: ${props => props.theme.colors.primary};
      border-radius: 5px;
      background: ${props => props.theme.colors.secondary};
   }
`;