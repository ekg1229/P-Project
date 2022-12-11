import React, {useState, useEffect} from "react";
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';

//Seial 추가/삭제 페이지
function EditImei() {
  const [imei, setImei] = useState("");

  const handleImei = (e) => {
    setImei(e.target.value);
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
      console.log(res)
    })
    .catch((err) => {
      console.log("error");
      console.log(err)
    })
  }

  const deleteImei = () => {
    axios.delete('/api/blockchain/imei', {
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
      console.log(res)
    })
    .catch((err) => {
      console.log("error");
      console.log(err)
    })
  }

  useEffect(()=>{
    return () => {
      console.log("Seial 추가/삭제 페이지 종료");
    }
  }, []);

  return(
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">Seial 추가/삭제 페이지</h3>
          </div>
          <Form className="mt-4">
            {/* Serial 추가 관련 */}
            <Form.Group id="confirmimei" className="mb-4">
              <Form.Label>Serial 추가/삭제</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="imei" placeholder="Password" name="imei" required maxlength="10" pattern="[0-9a-zA-Z]{10}" title="IMEI는 10자의 숫자, 영문 대소문자로 이루어집니다." onChange={handleImei} readOnly={false}/>
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
            {/* Serial 삭제 버튼 관련 */}
            <Button variant="primary" type="submit" className="w-50" id='confirm2' onClick={addImei}>
              Serial 추가
            </Button>
            <Button variant="primary" type="submit" className="w-50" id='confirm2' onClick={deleteImei}>
              Serial 삭제
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  )
}

export default EditImei;