import {React, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Form, Button} from 'react-bootstrap';

//비밀번호 찾기 페이지
function ForgotInfo() {
  const [id, setId] = useState("");
  const [imei, setImei] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleImei = (e) => {
    setImei(e.target.value);
  };

  const onClickForgot = (e) => {
    // e.preventDefault(); //submit default 제출 막음
    console.log('비밀번호 찾기 페이지 클릭');
  }

  const useEffect = (() => {
    console.log("Start ForgotPw.jsx");

    axios.post('/api/auth/register', {
      //axios body에 보낼 데이터
      id: id,
      imei: imei,
    },
    {
      //axios header
      headers:{
        'Content-Type': 'application/json',
        //'Authorization' : `Bearer ${accessToken}`
      }
    })
    .then((res) => {
      console.log(res)
      if(res.state==='true'){
        console.log("response success")
        //go to signin page
        window.location.href="/signin"
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  return (
    <Container>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">비밀번호 찾기</h3>
          </div>
          <Form className="mt-4">
            {/* 아이디 관련 */}
            <Form.Group id="email" className="mb-4">
              <Form.Label>아이디</Form.Label>
              <div className="form-floating">
                <input type="email" className="form-control was-validate" id="id" placeholder="name@example.com" name="name" required maxLength="20" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" title="이메일을 입력하세요."onChange={handleId}/>
                <label htmlFor="floatingInput" style={{color: "#BDBDBD"}}>이메일 주소를 입력하세요.</label>
                <div className="valid-feedback">
                  올바른 입력입니다.
                </div>
                <div className="invalid-feedback">
                  이메일 형식으로 입력해주세요.
                </div>
              </div>
            </Form.Group>

            {/* IMEI 관련 */}
            <Form.Group id="confirmimei" className="mb-4">
              <Form.Label>IMEI</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="imei" placeholder="Password" name="imei" required maxlength="10" pattern="[0-9a-zA-Z]{10}" title="IMEI는 10자의 숫자, 영문 대소문자로 이루어집니다." onChange={handleImei} readOnly={false}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}}>IMEI를 입력해주세요</label>
                <div class="valid-feedback" id="CheckTrue2">
                  유효한 IMEI입니다.
                </div>
                <div class="invalid-feedback" id="CheckFalse2">
                  유효하지 않은 IMEI입니다.
                </div>
              </div>
              <h2></h2> {/* 여백을 위해 추가 */}
            </Form.Group>
            
            {/* 비밀번호 찾기 관련 */}
            <Button variant="primary" type="submit" className="w-100" onClick={onClickForgot}>
              비밀번호 찾기
            </Button>
          </Form>

          <div style={{position: "flex", justifyContent: "center", alignItems: "center", }} className="mt-4">    {/*className="d-flex justify-content-center align-items-center mt-4"*/}
            <span className="fw-normal" style={{color: "red", float: "right"}}>
              ※ 변경된 비밀번호는 아이디와 같습니다.
            </span>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default ForgotInfo;