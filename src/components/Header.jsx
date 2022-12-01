import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import blockchainpng_logo from '../images/blockchainpng_logo.png';
import './Header.css';

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
        <Nav.Link href="general">일반조회</Nav.Link>
        <Nav.Link href="accident">시간조회</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="CheckInfo">내 정보</Nav.Link>
        <Nav.Link href="signin">로그인</Nav.Link>
        <Nav.Link href="signup">회원가입</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;