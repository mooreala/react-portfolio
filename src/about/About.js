import React from 'react';
import './About.css';
import profile from '../img/profile.png';

function About() {
  return (
    <div className="about">
      <div className="intro">
        <h1>
          Hi! I'm <span style={{ color: "#A5A58D" }}>Alana Moore</span>
        </h1>
        <h2>
          I like to design, program, and draw.
        </h2>
        <p>
          I am a senior software engineering student at ASU, located in the Pacific Northwest. I am interested in front-end development, human computer interaction, and AI. 
        </p>
        <p>
          I am passionate about many things such as music, art, and storytelling. My aspirations include working on creative software that can help others and impact their lives.
        </p>
      </div>
      <img src={profile} width={300} height={300} alt='Self-portrait' />
    </div>
  );
}

export default About;