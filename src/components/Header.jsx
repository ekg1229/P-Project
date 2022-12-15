import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import blockchainpng_logo from '../images/blockchainpng_logo.png';
import '../styles/Header.css';
import logout from '../utils/logout';

function Header() {
  return (
    <Navbar className="Navbar" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand className="HeaderLogo" href="main" style={{fontSize: "2rem"}}>
      <img src={blockchainpng_logo}width="60"height="60"/>
      블록체인블랙박스
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavDropdown style={{fontSize: "1.5rem"}} title="조회하기" id="collasible-nav-dropdown">
        <NavDropdown.Item href="general" style={{fontSize: "1.2rem"}}>일반조회</NavDropdown.Item>
        <NavDropdown.Item href="accident" style={{fontSize: "1.2rem"}}>사고조회</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="userinfo" style={{fontSize: "1.5rem"}}>내 정보</Nav.Link>
        <Nav.Link href="signin" onClick={logout} style={{fontSize: "1.5rem"}}>로그아웃</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header; 