import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const Project = styled.div`
  background: black;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
`;

const ProjectDescription = styled.p`
  margin-bottom: 0;
`;

const Projects = () => (
  <ProjectsWrapper>
    <h2>Projects</h2>
    <Project>
      <ProjectTitle>Text-to-Speech Convertor</ProjectTitle>
      <ProjectDescription>
      A program that transforms written text into spoken words, offering users the option to listen to the text instead of reading it.
      </ProjectDescription>
    </Project>
    <Project>
      <ProjectTitle>SnapShare: Your Ultimate Image Gallery</ProjectTitle>
      <ProjectDescription>
        An image gallery web app that allows users to upload, view, and share their favorite images. Built with a sleek and user-friendly interface.
      </ProjectDescription>
    </Project>
    <Project>
      <ProjectTitle>Portfolio Website using React</ProjectTitle>
      <ProjectDescription>
        A personal portfolio website created using React to showcase my projects and skills. It includes sections like About, Skills, Projects, and Contact.
      </ProjectDescription>
    </Project>
  </ProjectsWrapper>
);

export default Projects;





