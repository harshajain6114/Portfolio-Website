import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/harshaport.jpeg'; // Ensure the path matches your image file

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
`;

const AboutContent = styled.div`
  flex: 1;
`;

const About = () => (
  <AboutWrapper>
    <ProfileImage src={profileImage} alt="Profile" />
    <AboutContent>
      <h2>About Me</h2>
      <p>Welcome to my portfolio! I am a passionate web developer with experience in creating responsive and user-friendly web applications.</p>
    </AboutContent>
  </AboutWrapper>
);

export default About;




