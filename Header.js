import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Import Font Awesome icons
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Name = styled.div`
  font-size: 60px;
  margin-bottom: 10px;
  color: #ffffff;
  margin: 0 auto; /* Center horizontally */
  width: fit-content; /* Set width to fit content */
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Header = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/harsha-jain-b1859b287", "_blank");
  };

  const openTwitter = () => {
    window.open("https://x.com/HarshaJain_0611", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/Harshajain0611", "_blank");
  };

  return (
    <HeaderWrapper>
      <Name>Harsha Jain</Name>
      <IconsContainer>
        <Icon onClick={openLinkedIn}>
          <FaLinkedin size={30} />
        </Icon>
        <Icon onClick={openTwitter}>
          <FaTwitter size={30} />
        </Icon>
        <Icon onClick={openGithub}>
          <FaGithub size={30} />
        </Icon>
      </IconsContainer>
    </HeaderWrapper>
  );
}

export default Header;











