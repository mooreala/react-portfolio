import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Mail } from '../img/mail-svg.svg';
import { ReactComponent as Github } from '../img/github-svg.svg';
import { ReactComponent as LinkedIn } from '../img/linkedin-svg.svg';
import './Footer.css';

const Wrapper = styled.div`
  left: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  text-align: center;
  height: 70px;
  margin-bottom: 150px;
`
const FooterText = styled.div`
  font-size: 25px;
  color: #4E3D42;
  font-weight: 600;
`

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>Let's connect!</FooterText>
      <a href="mailto:polkafrogg@gmail.com" target="_blank" rel="noreferrer">
          <Mail style={{ width: 40, height: 40, padding: 30, }} />
      </a>
      <a href="https://github.com/mooreala" target="_blank" rel="noreferrer">
          <Github style={{ width: 50, height: 50, padding: 30, }} />
      </a>
      <a href="https://www.linkedin.com/in/alanaaemoore/" target="_blank" rel="noreferrer">
          <LinkedIn style={{ width: 40, height: 40, padding: 30, }} />
      </a>
      <p>Website by me, powered by React! Check out the source code <a href="https://github.com/mooreala/react-portfolio" target="_blank" rel="noreferrer">here.</a></p>
    </Wrapper>
  );
}
export default Footer;