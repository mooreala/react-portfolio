import React, { useState } from 'react';
import styled from 'styled-components';
import Job from './Job';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Jobs = styled.div`
  margin: 10px;
`

const MenuButton = styled.button`
  color: #4E3D42;
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
  background: none;
  border: none;
  outline: 1px;
  border-radius: 2rem;
  outline-style: solid;
  outline-color: #4E3D42;
  padding: 15px;
  margin: 10px;
  &:hover {
    color: #BD9A7A;
    outline-color: #BD9A7A;
    transition: all .2s ease-in;
  }
`

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
      "Translated domain business knowledge from my barista experience to the simulation software.",
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
  const [active, setActive] = useState();

  function renderButton() {
    const selectedJob = myjobs.filter(j => j.company === active);
    return (
      selectedJob.map(j => (
        <Job title={j.title} date={j.date} company={j.company} description={j.description} />
      ))
    );
  }

  return (
    <Container>
      <h2>Internship Experience</h2>
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