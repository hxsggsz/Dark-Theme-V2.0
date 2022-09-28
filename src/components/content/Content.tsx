import { ContentStyles, Button } from "./ContentStyles";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface Prop {
   toggleTheme(): void;
}

export const Content: React.FC<Prop> = ({ toggleTheme }) => {
   const { title } = useContext(ThemeContext)

   return (
      <>
      <ContentStyles>   
         <h1>Dark Mode</h1>
         <Button onClick={toggleTheme} type="submit" >{title === 'light' ? 'ON' : 'OFF'}</Button>
      </ContentStyles>
   </>
   )
}