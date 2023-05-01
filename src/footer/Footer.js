import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Mail } from '../img/mail-svg.svg';
import { ReactComponent as Github } from '../img/github-svg.svg';
import { ReactComponent as LinkedIn } from '../img/linkedin-svg.svg';

const Wrapper = styled.div`
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  text-align: center;
  height: 70px;
  margin-top: 50px;
  margin-bottom: 150px;
`
const FooterText = styled.div`
  font-size: 25px;
  color: #4E3D42;
  font-weight: 600;
`

const FooterLink = styled.a`
  &:link,
  &:visited {
    color: #BD9A7A;
    text-decoration: none;
  }
`

const Footer = () => {
  return (
    <Wrapper id="contact">
      <FooterText>Let's connect!</FooterText>
      <FooterLink href="mailto:alana@moorelogic.com" target="_blank" rel="noreferrer">
          <Mail style={{ width: 40, height: 40, padding: 30, }} alt="Write Alana an email" />
      </FooterLink>
      <FooterLink href="https://github.com/mooreala" target="_blank" rel="noreferrer" >
          <Github style={{ width: 50, height: 50, padding: 30, }} alt="Link to Alana's Github profile" />
      </FooterLink>
      <FooterLink href="https://www.linkedin.com/in/alanaaemoore/" target="_blank" rel="noreferrer">
          <LinkedIn style={{ width: 40, height: 40, padding: 30, }} alt="Link to Alana's LinkedIn profile" />
      </FooterLink>
      <p>Website by me, powered by React! Check out the source code <FooterLink href="https://github.com/mooreala/react-portfolio" target="_blank" rel="noreferrer">here.</FooterLink></p>
    </Wrapper>
  );
}
export default Footer;