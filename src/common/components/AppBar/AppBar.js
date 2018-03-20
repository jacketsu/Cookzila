import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const AppBar = ({
  isAuthorized,
  onToShare,
  onLogout,
}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Cookzila</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {
        isAuthorized === false ?
        (
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/login' }}><NavItem eventKey={2} href="#">Sign in</NavItem></LinkContainer>
          </Nav>
        ) :
        (
          <Nav pullRight>
            <NavItem eventKey={1} onClick={onToShare}>Share recipes</NavItem>
            <NavItem eventKey={2} onClick={onLogout} href="#">Log out</NavItem>
          </Nav>
        )        
      }
    </Navbar.Collapse>
  </Navbar>
);

export default AppBar;