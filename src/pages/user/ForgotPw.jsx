import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Form, Button} from 'react-bootstrap';

//비밀번호 찾기 페이지
function ForgotInfo() {
  const [email, setEmail] = useState("");

  const handleId = (e) => {
    setEmail(e.target.value);
  };

  const onClickForgot = (e) => {
    console.log('비밀번호 찾기 페이지 클릭');

    axios.put('/api/auth/unknownPassword', {
      //axios body에 보낼 데이터
      email: email,
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
  }

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
            
            {/* 비밀번호 찾기 관련 */}
            <Button variant="primary" className="w-100" onClick={onClickForgot}>
              비밀번호 찾기
            </Button>
          </Form>

          {/* <div style={{position: "flex", justifyContent: "center", alignItems: "center", }} className="mt-4">
            <span style={{color: "red", float: "right"}}>
              ※ 변경된 비밀번호는 아이디와 같습니다.
            </span>
          </div> */}

          <div className="d-flex justify-content-center align-items-center mt-4">
            <span className="fw-normal">
              비밀번호가 기억나셨나요? &nbsp;
              <Link to="/signin" className="fw-bold">
                {`로그인`}
              </Link>
            </span>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default ForgotInfo;