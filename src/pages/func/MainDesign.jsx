import React from 'react';
import './Main.css';
import { Card, Col, Row, Button } from "antd";
import humanIcon from "../../images/humanIcon.png";

const {Meta}=Card;

const MainDesign = () => {
  return (
    <div className="main_page_wrapper">
    <div><ProfileCard/></div>
    <p><OutlineText/></p>
    <p></p>
    </div>
    
  )
}

const OutlineText=()=>{
  return(
    <div>
      <h2 className="main_outline_title">개요</h2>
      <hr style={{color:"white"}}/>
      <h5 className="main_outline_text">
        2022년 통계청에서 조사한 자료에 따르면 차량 보유자 81%가 네비게이션을 보유하고 있습니다.<p/>
        2022년 국토교통부에서 조사한 자료에 따르면 자동차 등록 대수는 점점 증가하는 추세입니다.<p/>
        하지만 현재 블랙박스는 사고 등의 강한 충격으로 블랙박스가 파손될 경우 정보가 유실 될 수도 있습니다.<p/>
        우리는 이러한 사고정보 유실사태를 방지하고자 블록체인을 활용하여 블랙박스 파손에도 안전하게 사고정보를 확인할 수 있는 기술을 고안했습니다. 
      </h5>
    </div>
  )
}
const ProfileCard = () => {
  return (
    <div className="profile">
     
<Row gutter={100}>
      <Col span={6.5}>
      <Card
      
    style={{boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)", width: 220}}
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
    style={{boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)",  width: 220 }}
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
    style={{boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)",  width: 220 }}
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
    style={{boxShadow:"5px 8px 15px rgba(208, 216, 243, 0.6)",  width: 220 }}
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