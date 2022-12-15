import React, {useState} from 'react';
import {Container, Nav} from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TabContent from '../../components/TabContent';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import "../../styles/user/UserInfo.css";

//내 정보 페이지
function UserInfo() {
  setAuthorizationToken();
  const [tab, setTab] = useState("0");

  return (
    <div className="wrapper">
      <Header/>
      <section className="main_visual">
        <Container>
          <Nav style={{fontSize: "1.3rem"}} className="mt-5 justify-content-center" fill variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link style={{fontWeight: "bold", color: "#22A39F"}} eventKey="link-0" onClick={()=>{setTab("0")}}>개인정보 확인</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontWeight: "bold", color: "#22A39F"}} eventKey="link-1" onClick={()=>{setTab("1")}}>개인정보 수정</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontWeight: "bold", color: "#22A39F"}} eventKey="link-2" onClick={()=>{setTab("2")}}>비밀번호 변경</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{fontWeight: "bold", color: "#22A39F"}} eventKey="link-3" onClick={()=>{setTab("3")}}>Serial 추가/삭제</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <TabContent state={tab}/>
      </section>
      <Footer/>
    </div>
  );
}

export default UserInfo;