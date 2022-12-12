import React, {useState, useEffect} from "react";
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';

//Serial 추가/삭제 페이지
function EditImei() {
  const [imei, setImei] = useState("");
  const [imei_all, setImeiAll] = useState([
    {id: 1, value: "7f409b1b3211c37499"},
  ]);

  const handleImei = (e) => {
    setImei(e.target.value);
  };

  const handleImeiAll = (e) => {
    setImeiAll(imei_all => [...imei_all, imei]);
    setImei('');
  };

  const addImei = () => {
    axios.post('/api/blockchain/imei', {
      imei: imei
    },
    {
      headers:{
        withCredentials: true,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log("success");
      console.log(res);
      setImeiAll((prevItem)=>{
        return[
          {
            id: imei_all.length + 1,
            value: imei,
          },
          ...prevItem,
        ]
      })
      // setImei("");
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    })
  }

  const getImei = () => {
    axios.get('/api/blockchain/imeiList', {
      headers:{
        withCredentials: true,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log("success");
      console.log(res);
      console.log("res.data"+res.data);
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    })
  }

  const deleteImei = (value) => {
    axios.delete('http://localhost:8080/api/blockchain/imei', {
      imei: imei
    },
    {
      headers:{
        withCredentials: true,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log("success");
      console.log(res);
      setImeiAll((imei_all)=>imei_all.filter((imei_all)=>imei_all.value != value));
      console.log(imei_all);
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
      setImeiAll((imei_all)=>imei_all.filter((imei_all)=>imei_all.value != value));
      console.log(imei_all);
    })
  }

  useEffect(()=>{
    return () => {
      console.log("Serial 추가/삭제 페이지 종료");
    }
  }, []);

  return(
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">Serial 추가/삭제 페이지</h3>
          </div>
          <Form className="mt-4">
            {/* Serial 추가/삭제 관련 */}
            <Form.Group id="confirmimei" className="mb-4">
              <Form.Label>Serial 추가/삭제</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="imei" placeholder="Password" name="imei" pattern="[0-9a-zA-Z]{10}" title="Serial은 숫자, 영문 대소문자로 이루어집니다." onChange={handleImei} readOnly={false}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}}>Serial Number를 입력해주세요</label>
                <div class="valid-feedback" id="CheckTrue2">
                  유효한 Serial입니다.
                </div>
                <div class="invalid-feedback" id="CheckFalse2">
                  유효하지 않은 Serial입니다.
                </div>
              </div>
              <h2></h2>
            </Form.Group>

            {/* Serial 추가/삭제 버튼 관련 */}
            <Button variant="primary" type="submit" className="w-50" id='confirm2' onClick={addImei}>
              Serial 추가
            </Button>
            <Button variant="primary" type="submit" className="w-50" id='confirm2' onClick={()=>deleteImei(imei)}>
              Serial 삭제
            </Button>
          </Form>
          {/* Serial Card */}
          imei: {imei}
          <div id="element-list">
            <ul id="list">
              {imei_all.map((item)=>{return <li key={item.id}>{item.value}</li>;})}
            </ul>
          </div>
        </div>
      </Col>
    </Container>
  )
}

export default EditImei;