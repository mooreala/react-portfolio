import React, { useState } from 'react';
import styled from 'styled-components';
import Job from './Job';
import { Container, Title, SectionLine } from '../SectionStyles';

const Jobs = styled.div`
  margin: 10px;
  height: 400px;
  @media (max-width: 1424px) {
    height: 500px;
  }
  @media (max-width: 354px) {
    height: 700px;
  }
`

const MenuButton = styled.button`
  color: #4E3D42;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
  background: none;
  border: 1px solid #4E3D42;
  border-radius: 2rem;
  padding: 15px;
  margin: 10px;
  transition: all .3s ease-in;
  &:hover {
    border: 1px solid #BD9A7A;
    background-color: #BD9A7A;
    color: white;
  }
  @media (max-width: 399px) {
    margin: 5px;
  }
`

const Menu = styled.div`
  flex-direction: row;
`

const myjobs = [
  {
    title: "Software Engineering Intern",
    date: "Apr 2022 - Present",
    company: "Intel",
    description: [
      "Automating cloud solutions for system configuration updates",
      "Contributing to REST API development",
      "Promoting team inclusivity by facilitating weekly newsletters and surveys",
    ],
  },
  {
    title: "Software Engineering Intern",
    date: "Aug 2021 - Dec 2021",
    company: "Starbucks DevOps",
    description: [
      "Collaborated on a digital store simulation that functionally represents a Starbucks store",
      "Worked on simulation version control and made contributions to the existing repository",
      "Worked on and created unit tests",
      "Contributed to software architecture and early development of new software modules",
      "Translated domain business knowledge from my barista experience to the simulation software",
    ],
  },
  {
    title: "Software Engineering Intern",
    date: "May 2021 - Aug 2021",
    company: "Apple",
    description: [
      "Worked on apple-made plugins for Unity to support game controller usage and iOS play store achievements",
      "Contributed to deploying apple plugins to the unity game development engine",
      "Learned and wrote code using unity-flavored scripts in C#",
      "Debugged and wrote radar reports for back-end code",
    ],
  },
];

function Experience() {
  const [active, setActive] = useState("Intel");

  function renderButton() {
    const selectedJob = myjobs.filter(j => j.company === active);
    return (
      selectedJob.map(j => (
        <Job title={j.title} date={j.date} company={j.company} description={j.description} />
      ))
    );
  }

  return (
    <Container id="experience">
      <Title>INTERNSHIP EXPERIENCE</Title>
      <SectionLine />
      <Menu>
        { myjobs.map(job => (
          <MenuButton
            onClick={() => setActive( job.company )}
          >
            {job.company}
          </MenuButton>
        ))}
      </Menu>
      <Jobs>
        { renderButton() }
      </Jobs>
    </Container>
  );
}

export default Experience;