import React, {useState, useEffect} from 'react';
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import Popup from "../../components/Popup";

//개인정보 확인 페이지
function EditInfo() {
  //서버에서 데이터 받아오기
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});

  //개인정보 확인
  const getData = () => {
    axios.get("/api/auth/personelInfo")
    .then(res => {
      console.log("success");
      setEmail(res.data.email);
      setName(res.data.name);
      setAge(res.data.age);
    })
    .catch(res => {
      console.log("error");
      console.log(res);
      setPopup({
        open: true,
        title: "개인정보 확인 오류",
        message: "서버에 문제가 있습니다. 다시 시도해주세요."
      });
    })
  }

  useEffect(()=>{
    getData();

    return () => {
      console.log("개인정보 확인 페이지 종료");
    }
  }, []);

  return (
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500" style={{opacity: 0.9, border: "1px solid #282c34", background: "#282c34"}}>
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h2 className="mb-0" style={{color: "white"}}>개인정보 확인</h2>
          </div>
          <Form className="mt-4">
            {/* 아이디(이메일) 관련 */}
            <Form.Group id="email" className="mb-4">
              <Form.Label style={{color: "white", fontSize: "1.2rem"}}>이메일</Form.Label>
              <div className="form-floating mb-3" style={{color: "white", fontSize: "1.2rem"}}>
                {email}
              </div>
            </Form.Group>

            {/* 이름 관련 */}
            <Form.Group id="name" className="mb-4">
              <Form.Label style={{color: "white", fontSize: "1.2rem"}}>이름</Form.Label>
              <div className="form-floating" style={{color: "white", fontSize: "1.2rem"}}>
                {name}
              </div>
            </Form.Group>

            {/* 나이 관련 */}
            <Form.Group id="age" className="mb-4">
              <Form.Label style={{color: "white", fontSize: "1.2rem"}}>나이</Form.Label>
              <div className="form-floating" style={{color: "white", fontSize: "1.2rem"}}>
                {age}
              </div>
            </Form.Group>

            {/* 수정 관련 */}
            {/* <Button variant="primary" className="w-100" onClick={moveEditInfo} style={{fontSize: "1.2rem"}}>
              개인정보 수정 페이지로 이동
            </Button> */}
          </Form>
        </div>
      </Col>
      <div>
        <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
      </div>
    </Container>
  );
}

export default EditInfo;