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

function Art() {
  return (
    <Container id="art">
      <Title>My Artwork</Title>
    </Container>
  );
}

export default Art;