import styled from "styled-components";

export const ContentStyles = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: ${props => props.theme.colors.text}
`;

export const Button = styled.button`
   width: 125px;
   height: 40px;
   display: flex;
   align-items: center;
   color: ${props => props.theme.colors.secondary};
   cursor: pointer;
   background: ${props => props.theme.colors.primary};
   border-radius: 10px;
   justify-content: center;
   transform: translate(15%, 0%);

   &:hover {
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.secondary};
      transition: all 0.2s linear;
   }
`;

