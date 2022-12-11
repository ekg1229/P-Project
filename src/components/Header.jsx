import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import blockchainpng_logo from '../images/blockchainpng_logo.png';
import '../styles/Header.css';
import logout from '../utils/logout';

function Header() {
  return (
    <Navbar className="Navbar" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand className="HeaderLogo" href="main">
      <img src={blockchainpng_logo}width="50"height="50"/>
      블록체인블랙박스
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavDropdown title="조회하기" id="collasible-nav-dropdown">
              <NavDropdown.Item href="general">일반조회</NavDropdown.Item>
              <NavDropdown.Item href="accident">사고조회</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="userinfo">내 정보</Nav.Link>
        <Nav.Link href="signin" onClick={logout}>로그아웃</Nav.Link> 
        <Nav.Link href="signup">회원가입</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header; 