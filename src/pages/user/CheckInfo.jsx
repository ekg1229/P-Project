import React, {useState, useEffect} from 'react';
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';

//개인정보 확인 페이지
function EditInfo() {
  //서버에서 데이터 받아오기
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //개인정보 확인
  const getData = () => {
    axios.get("http://localhost:8080/api/auth/personelInfo")
    .then(res => {
      console.log("success");
      setEmail(res.data.email);
      setName(res.data.name);
      setAge(res.data.age);
    })
    .catch(res => {
      console.log("error");
      console.log(res);
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
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">개인정보 확인 페이지</h3>
          </div>
          <Form className="mt-4">
            {/* 아이디(이메일) 관련 */}
            <Form.Group id="email" className="mb-4">
              <Form.Label>이메일</Form.Label>
              <div className="form-floating mb-3">
                {email}
              </div>
            </Form.Group>

            {/* 이름 관련 */}
            <Form.Group id="name" className="mb-4">
              <Form.Label>이름</Form.Label>
              <div className="form-floating">
                {name}
              </div>
            </Form.Group>

            {/* 나이 관련 */}
            <Form.Group id="age" className="mb-4">
              <Form.Label>나이</Form.Label>
              <div className="form-floating">
                {age}
              </div>
            </Form.Group>

            {/* 수정 관련 */}
            <Button variant="primary" className="w-100"s>
              개인정보 수정 페이지로 이동
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default EditInfo;