import { FooterStyle, Icons } from "./FooterStyle"

export const Footer: React.FC = () => (
      <FooterStyle>
         <h1>Feito por Victor Hugo</h1>
         <Icons>
            <a href="https://www.linkedin.com/in/victor-hugo-994967241/" rel="noreferrer" target="_blank"><i className="devicon-linkedin-plain"></i></a>
            <a href="https://github.com/hxsggsz" rel="noreferrer" target="_blank"><i className="devicon-github-original"></i></a>
         </Icons>
      </FooterStyle>
   )