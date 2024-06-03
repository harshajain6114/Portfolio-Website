import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left; /* Ensure text alignment is left */
  width: 100%; /* Full width to align to left */
`;

const Skills = () => (
  <SkillsWrapper>
    <h2>Skills</h2>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Linux</li>
      <li>DSA</li>
    </ul>
  </SkillsWrapper>
);

export default Skills;



