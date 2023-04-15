import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Github } from '../img/github-svg.svg';
import { ReactComponent as ExtLink } from '../img/external-link-svg.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  @media (max-width: 1087px) {
    flex-wrap: wrap;
    flex-direction: row;
    margin: auto;
  }
`

const Card = styled.div`
  margin-top: 0px;
  flex-direction: column;
  margin: 15px;
  margin-top: 10px;
`

const ProjSection = styled.div`
  max-width: 400px;
  border-radius: 5px;
  padding: 30px;
  background-color: #4E3D42;
  @media (max-width: 1087px) {
    width: 70vw;
    padding: 20px;
    margin: 0px;
  }
`

const LinkSection = styled.div`
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: 1087px) {
    margin-top: 10px;
  }
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: #B7B7A4;
`

const Title = styled.h1`
  color: white;
  font-size: 20px;
`

const Subtitle = styled.h2`
  font-size: 15px;
  color: #BD9A7A;
`

const Preview = styled.img`
  /* max-width: 500px; */
  border-radius: 5px;
  width: 500px;
  height: auto;
  margin: 15px;
  margin-top: 10px;
  padding: 0px;
  transition: all .5s ease-in-out;
  @media (max-width: 1087px) {
    max-width: 500px;
    width: 85%
  }
  &:hover {
    opacity: 60%;
  }
`

const ImgLink = styled.a`
  display:block;
`

const ProjLink = styled.a`
  &:link,
  &:visited {
    color: #BD9A7A;
    text-decoration: none;
  }
`

function Project({src, title, subtitle, desc, stack, gitlink, extlink}) {
  function renderGitLink() {
    if (gitlink !== "") {
      return (
        <ProjLink href={gitlink} target="_blank" rel="noreferrer">
          <Github style={{ width: 30, height: 30, margin: "0px 10px"}} />
        </ProjLink>
      );
    }
  }

  function renderExtLink() {
    if (extlink !== "") {
      return (
        <ProjLink href={extlink} target="_blank" rel="noreferrer">
          <ExtLink style={{ width: 30, height: 30, margin: "0px 10px"}} />
        </ProjLink>
      );
    }
  }

  return (
    <Container>
      <div style={{textAlign: "center"}}>
        <ImgLink href={extlink} target="_blank" rel="noreferrer">
          <Preview src={src} />
        </ImgLink>
      </div>
      <Card>
        <ProjSection>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <p style={{ color: "white" }}>{desc}</p>
          <TechStack>
            { stack.map(ln => (
              <p style={{margin:10}}>{ln}</p>
            ))}
          </TechStack>
        </ProjSection>
        <LinkSection>
          {renderGitLink()}
          {renderExtLink()}
        </LinkSection>
      </Card>
    </Container>
  )
};

export default Project;