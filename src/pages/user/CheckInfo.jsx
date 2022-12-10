import React, {useState, useEffect} from 'react';
import {Container, Col, Form, Button} from 'react-bootstrap';
import setAuthorizationToken from '../../utils/logout';
import axios from 'axios';

//개인정보 확인 페이지
function EditInfo() {
  //서버에서 데이터 받아오기
  const [data, setData] = useState([]); //axios data 저장(JSON)l

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //개인정보 확인
  const getData = () => {
    setAuthorizationToken();
    axios.get("http://localhost:8080/api/auth/personelInfo")
    .then(res => {
      console.log("res.data: " + res.data);
      setData(res.data);
      setEmail(res.data.email);
      setName(res.data.name);
      setAge(res.data.age);
    })
    .catch(res => {
      console.log(res.data);
      setData({
        "email": "loading",
        "name": "loading",
        "age": "loading",
      });
      setEmail(data.email);
      setName(data.name);
      setAge(data.age);
      console.log("data: " + JSON.stringify(data));
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
          <Form className="mt-4">
            {/* 아이디(이메일) 관련 */}
            <Form.Group id="email" className="mb-4">
              <Form.Label>이메일</Form.Label>
              <div className="form-floating mb-3">
                {email}
              </div>
            </Form.Group>

            {/* 이름 관련 */}
            <Form.Group id="password" className="mb-4">
              <Form.Label>이름</Form.Label>
              <div className="form-floating">
                {name}
              </div>
            </Form.Group>

            {/* 나이 관련 */}
            <Form.Group id="password" className="mb-4">
              <Form.Label>나이</Form.Label>
              <div className="form-floating">
                {age}
              </div>
            </Form.Group>

            {/* 개인정보 수정 관련 */}
            <Button variant="primary" className="w-100">
              개인정보 수정
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default EditInfo;