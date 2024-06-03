import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #444;
  padding: 10px 0;
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }

  &.active {
    border-bottom: 2px solid #ffd700;
  }
`;

const Nav = () => (
  <NavWrapper>
    <NavItem exact to="/" activeClassName="active">About</NavItem>
    <NavItem to="/skills" activeClassName="active">Skills</NavItem>
    <NavItem to="/projects" activeClassName="active">Projects</NavItem>
    <NavItem to="/contact" activeClassName="active">Contact</NavItem>
  </NavWrapper>
);

export default Nav;


