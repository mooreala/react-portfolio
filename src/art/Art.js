import React from 'react';
import styled from 'styled-components';
import { Container, Title, SectionLine } from '../PageStyles';
import Collage from "../img/artsplash.png";

const ArtSplash = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  transition: all .7s ease-in-out;
  &:hover {
    transform: rotate(5deg);
  }
`

const Text = styled.p`
  font-size: 18px;
  color: #4E3D42;
  margin: auto 25px;
`

function Art() {
  return (
    <Container id="art">
      <Title>ARTWORK</Title>
      <SectionLine />
      <Text>In my freetime I enjoy <span style={{color: "#A5A58D"}}>digital painting</span> in Procreate!</Text>
      <ArtSplash src={Collage} alt="A sample of Alana Moore's artwork."/>
    </Container>
  );
}

export default Art;