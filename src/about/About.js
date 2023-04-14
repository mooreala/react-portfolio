import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  @media (max-width: 1199px) {
    font-size: 30px;
  }
`

function About() {
  return (
    <Container id="about">
      <Title>More About Me</Title>
    </Container>
  );
}

export default About;