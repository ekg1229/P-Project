import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Col, Form, Card, Button} from 'react-bootstrap';

//개인정보 확인 페이지
function EditInfo() {
  //서버에서 데이터 받아오기
  const [data, setData] = useState([]); //axios data 저장(JSON)

  const [id, setId] = useState("");
  const [imei, setImei] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const getData = () => {axios.get("/api/checkinfo")
  .then(res => {
    console.log("res.data: " + res.data);
    setData(res.data);
  })
  .catch(res => {
    console.log(res.data);
    setData({
      "id": "abc@naver.com",
      "imei": 20221201,
      "name": "김정윤",
      "age": 22,
    });
    setId(data.id);
    setImei(data.imei);
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
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">개인정보 확인 페이지</h3>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default EditInfo;