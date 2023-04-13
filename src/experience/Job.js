import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  width: 40vw;
  outline: 1px;
  border-radius: 2rem;
  outline-style: solid;
  outline-color: #4E3D42;
  padding: 30px;
  margin: 25px;
  @media (max-width: 1199px) {
    width: 85vw;
    margin: 0px;
    outline: none;
  }
`
const JobTitle = styled.h1`
  font-size: 20px;
  color: #4E3D42;
  font-weight: 600;
  margin: 0px;
`
const JobDate = styled.p`
  color: #6B705C;
`

const JobDesc = styled.div`
  align-items: center;
  line-height: 2;
`

function Job({title, date, company, description}) {
  return (
    <Container>
      <JobTitle>{title} <span style={{color: "#A5A58D"}}>@ {company}</span></JobTitle>
      <JobDate>{date}</JobDate>
      <JobDesc>
        { description.map(ln => (
          <li>
            {ln}
          </li>
        ))}
      </JobDesc>
    </Container>
  );
}

export default Job;