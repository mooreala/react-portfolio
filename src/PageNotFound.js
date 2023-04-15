import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
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

const HomeButton = styled.a`
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid #4E3D42;
  color: #4E3D42;
  transition: all .2s ease-in;
  &:hover {
    color: #BD9A7A;
    border: 1px solid #BD9A7A;
  }
`

const ErrorTitle = styled.h1`
  font-size: clamp(4rem, 0.75rem + 1.5vw, 3rem);
`

const ErrorMessage = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 50px;
`

function PageNotFound() {
  return (
    <div>
      <Bar>
        <Logo href="/">ALANA MOORE</Logo>
      </Bar>
      <Container>
        <ErrorTitle>404</ErrorTitle>
        <ErrorMessage>Page Not Found</ErrorMessage>
        <HomeButton href="/">BACK TO HOME</HomeButton>
      </Container>
    </div>
  );
}

export default PageNotFound;