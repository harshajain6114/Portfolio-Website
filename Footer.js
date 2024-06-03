import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterWrapper>
    <p>Contact me: <a href="mailto:harshajain6114@gmail.com"><FaEnvelope /> harshajain6114@gmail.com</a></p>
  </FooterWrapper>
);

export default Footer;


