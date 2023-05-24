import React from 'react';
import profile from '../img/profile.png';
import styled from 'styled-components';

const Portrait = styled.img`
  width: 300px;
  height: auto;
  @media (max-width: 1199px) {
    margin-bottom: 50px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (max-width: 1199px) {
    flex-wrap: wrap;
    flex-direction: row;
    margin: 10px;
  }
`

const IntroText = styled.div`
  margin: 100px;
  margin-top: 0px;
  max-width: 30vw;
  @media (max-width: 1199px) {
    width: 90vw;
    margin: 0px;
    margin-bottom: 10px;
    max-width: 100%;
  }  
`

const IntroTitle = styled.h1`
  font-size: clamp(2rem, 0.75rem + 1.5vw, 3rem);
  font-weight: 600;
  @media (max-width: 1199px) {
    margin: 10px 0px;
  }
`

const IntroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 1199px) {
    margin: 10px 0px;
  }
`

function Intro() {
  return (
    <Container>
      <IntroText>
        <IntroTitle>
          Hi! I'm <span style={{ color: "#A5A58D" }}>Alana Moore</span>
        </IntroTitle>
        <IntroSubtitle>
          I like to design, program, and draw.
        </IntroSubtitle>
        <p>
          I am a recent Software Engineering graduate from ASU, interested in front-end development, human computer interaction, and AI. I have been working at Intel as a Technical Intern with a focus on automating cloud services and creating user-interfaces for REST APIs for just over a year. 
        </p>
        <p>
          I am passionate about many things such as music, art, and storytelling. My aspirations include working on creative software that can help others and impact their lives.
          In my free-time I'll either be reading fantasy novels, digital painting, or gaming! I am currently on my second Breath of the Wild playthrough.
        </p>
      </IntroText>
      <Portrait src={profile} alt='Self-portrait' /> 
    </Container>
  );
}

export default Intro;