import React from 'react';
import styled from 'styled-components';
import { Container, Title, SectionLine } from '../SectionStyles';
import Project from './Project';

import dadproj from '../img/projects/dad.png';
import calmcrows from '../img/projects/calmingcrows.png';
import healthpot from '../img/projects/healthpotion.png';
import kittykatch from '../img/projects/kittykatch.png';

const ProjectSection = styled.div`
  margin: 10px;
`

const projects = [
  {
    src: dadproj,
    title: "ASU Senior Capstone",
    subtitle: "Web Application",
    desc: "A cloud-based responsive website that allows schools from any district to sign-up for an essay competition. Deliverables include source code in a git repository, DevOps CICD build and release Pipelines for the application, and design and architecture documentation.",
    stack: [
      "Node.js",
      "React.js",
      "Bootstrap",
      "Azure",
      "Github Actions",
    ],
    gitlink: "",
    extlink: "https://dads-against-depression.github.io/school/",
  },
  {
    src: calmcrows,
    title: "Calming Crows",
    subtitle: "Boids Behavior Simulation",
    desc: "An interactive app that uses the flocking behaviors of boids to help calm users dealing with immediate anxiety or stress. This program will be available for users using a device with a version of Windows that supports raylib.",
    stack: [
      "C",
      "Raylib",
      "MinGW",
    ],
    gitlink: "https://github.com/mooreala/boids",
    extlink: "https://www.youtube.com/watch?v=7dx2ekpEHAI",
  },
  {
    src: healthpot,
    title: "Health Potion",
    subtitle: "Mobile Application Pitch Deck",
    desc: "A proposal for a mental wellness app for gamers that provides users with a dashboard of features to provide wellness focused gaming.",
    stack: [
      "Figma",
    ],
    gitlink: "",
    extlink: "https://docs.google.com/presentation/d/1MxQybgTJ5BlburDY5bnSdGqO5lM8eNTuOuHvD_js7Po/edit?usp=sharing",
  },
  {
    src: kittykatch,
    title: "Kitty Katch",
    subtitle: "Unity Game",
    desc: "A simple 2-D game made in Unity. All art assets made using Gimp. The goal of the game is to collect as many fish as possible, while dodging or destroying dropping fruits with your lazer gun.",
    stack: [
      "C#",
      "Unity",
      "Gimp",
    ],
    gitlink: "https://github.com/mooreala/kitty-katch",
    extlink: "https://mooreala.itch.io/kitty-katch-demo",
  },
];

function Projects() {
  return (
    <Container id="projects">
      <Title>PROJECTS</Title>
      <SectionLine />
      <ProjectSection>
        { projects.map(p => (
          <Project src={p.src} title={p.title} subtitle={p.subtitle} desc={p.desc} stack={p.stack} gitlink={p.gitlink} extlink={p.extlink} />
        ))}
      </ProjectSection>
    </Container>
  );
}

export default Projects;