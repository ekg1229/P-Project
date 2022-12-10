import React, { useState, useEffect } from 'react';
import {Container, Nav} from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import CheckInfo from './CheckInfo';
import EditPw from './EditPw';
import EditImei from './EditImei';
import "../../styles/user/UserInfo.css";

import axios from 'axios';

//내 정보 페이지
function UserInfo() {
  const [tab, setTab] = useState(0);

  return (
    <div className="wrapper">
      <Header/>
      <section className="main_visual">
      <Container>
        <Nav className="mt-5 mb-3" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>개인정보 수정/확인</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>비밀번호 변경</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>Serial 추가/삭제</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      </section>
      <Footer/>
    </div>
  );
}

export default UserInfo;