import React from 'react';
import '../../styles/Main.css';
import { Card, Col, Row } from "antd";
// import Button from 'react-bootstrap/Button';
import humanIcon from "../../images/humanIcon.png";
const {Meta}=Card;

const MainDesign = () => {
  return (
    <div className="main_page_wrapper">
    <div><ProfileCard/></div>
    <p><OutlineText/></p>
    <p><Difference/></p>
    {/* <p><LogInBtn/></p> */}
    </div>
    
  )
}

const OutlineText=()=>{
  return(
    <div>
      <h2 className="main_outline_title">개요</h2>
      <hr />
      <h5 className="main_outline_text">
        2022년 통계청에서 조사한 자료에 따르면 차량 보유자 81%가 네비게이션을 보유하고 있습니다.<p/>
        2022년 국토교통부에서 조사한 자료에 따르면 자동차 등록 대수는 점점 증가하는 추세입니다.<p/>
        하지만 현재 블랙박스는 사고 등의 강한 충격으로 블랙박스가 파손될 경우 정보가 유실 될 수도 있습니다.<p/>
        우리는 이러한 사고정보 유실사태를 방지하고자 블록체인을 활용하여 블랙박스 파손에도 안전하게 사고정보를 확인할 수 있는 기술을 고안했습니다. 
      </h5>
    </div>
  )
}
const Difference=()=>{
  return(
    <div>
      <h2 className="main_dif_title">기존 블랙박스와의 차별성</h2>
      <h4 style={{color:"white"}}/>
      <h5 className="main_dif_text">
        블록체인 블랙박스 기술은 블록체인 네트워크를 활용해 사고 발생 시점의 정보를 확인 할 수 있습니다.<p/>
        블랙박스의 충격센서는 사고를 감지하고, 사고 당시의 정보를 블랙박스에, 블록체인 네트워크에 저장합니다.<p/>
        블록체인 네트워크에 저장된 정보는 이곳에서 확인할 수 있습니다. 
      </h5>
    </div>
  )
}
//로그인버튼 수정하기("시작하기")
// const LogInBtn=()=>{
//   return(
//     <div>
//     <Button href="/signin" variant="outline-light" className="btn_login">시작하기</Button>
//   </div>)
// }

const ProfileCard = () => {
  return (
    <div className="profile">
     
<Row gutter={100}>
      <Col span={6.5}>
      <Card
      
    style={{marginTop:"20px",boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)", width: 220}}
    cover={
      <img
        alt="example"
        src={humanIcon}
      />
    }
  ><hr/>
    <Meta
      title="이름"
      description="소개"
    />
  </Card>
      </Col>
      <Col span={6.5}>
      <Card
    style={{marginTop:"20px",boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)",  width: 220 }}
    cover={
      <img
        alt="example"
        src={humanIcon}
      />
    }
  ><hr/>
    <Meta
      title="이름"
      description="소개"
    />
  </Card>
      </Col>
      <Col span={6.5}>
      <Card
    style={{marginTop:"20px",boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)",  width: 220 }}
    cover={
      <img
        alt="example"
        src={humanIcon}
      />
    }
  ><hr/>
    <Meta
      title="이름"
      description="소개"
    />
  </Card>
      </Col>
      <Col span={6.5}>
      <Card
    style={{marginTop:"20px",boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)",  width: 220 }}
    cover={
      <img
        alt="example"
        src={humanIcon}
      />
    }
  ><hr/>
    <Meta
      title="이름"
      description="소개"
    />
  </Card>
      </Col>
    </Row>
    </div>
  );
};

export default MainDesign;