import React from 'react';
import styled from 'styled-components';
import ArtCollage from './ArtCollage';
import Footer from '../footer/Footer';

const Collage = styled.div`
  margin: 50px 20vw;
`

const Bar = styled.nav`
  font-size: 18px;
  padding-bottom: 10px;
  @media (min-width: 786px) {
    margin-top: 17px;
  }
`

const NavLink = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  &:link,
  &:visited {
    color: #4E3D42;
  }
  &:hover {
    color: #BD9A7A;
    transition: all .2s ease-in;
  }
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
`

const Logo  = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 20px;
`

function CollagePage() {
  return (
    <div>
      <Bar>
        <Logo href="/react-portfolio">ALANA MOORE</Logo>
      </Bar>
        <Collage>
        <ArtCollage />
      </Collage>
      <Footer />
    </div>
  );
}

export default CollagePage;