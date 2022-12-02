import {React, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Form, Card, Button} from 'react-bootstrap';

//로그인 페이지
function SignIn() {
  const [id, setInputId] = useState("");
  const [password, setPassword] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log('Click login');
  }

  const useEffect=(() => {
    //axios 통신
    axios.post('/api/signin', {
      //axios body
      id: id,
      password: password,
    },
    {
      //axios header
      headers:{
        'Content-Type': 'application/json',
        // 'Authorization' : `Bearer ${accessToken}`
      }
    })
    .then((res) => {
      console.log(res);

      if(res.status==='true'){
        //link to main page
        console.log("response success");
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
            <h3 className="mb-0">로그인 페이지</h3>
          </div>
          <Form className="mt-4">
            {/* 아이디 관련 */}
            <Form.Group id="email" className="mb-4">
              <Form.Label>아이디</Form.Label>
              <div className="form-floating mb-3">
                <input type="email" className="form-control was-validate" id="id" placeholder="name@example.com" name="name" required maxLength="20" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" title="이메일 주소를 입력하세요." onChange={handleInputId}/>
                <label htmlFor="floatingInput" style={{color: "#BDBDBD"}}>이메일 주소를 입력하세요.</label>
                <div className="valid-feedback">
                  올바른 입력입니다.
                </div>
                <div className="invalid-feedback">
                  이메일 형식으로 입력해주세요.
                </div>
              </div>
            </Form.Group>

            {/* 비밀번호 관련 */}
            <Form.Group>
              <Form.Group id="password" className="mb-4">
                <Form.Label>비밀번호</Form.Label>
                <div className="form-floating">
                  <input type="password" className="form-control was-validate" id="password" placeholder="Password" name="pwd" required maxLength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPassword}/>
                  <label htmlFor="floatingPassword" style={{color: "#BDBDBD"}}>비밀번호를 입력하세요</label>
                  <div className="valid-feedback">
                    올바른 입력입니다.
                  </div>
                  <div className="invalid-feedback">
                    5글자 이상 10글자 이하로 작성해 주세요.
                  </div>
                </div>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-4"> 
                <Card.Link href='/forgotpw' className="small text-end" text-align='center'>비밀번호를 잊으셨나요?</Card.Link>
              </div>
            </Form.Group>
            {/* 로그인 관련 */}
            <Button variant="primary" type="submit" className="w-100" onClick={onClickLogin}>
              로그인
            </Button>
          </Form>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <span className="fw-normal">
              회원이 아니신가요? &nbsp;
              <Link to="/signup" className="fw-bold">
                {`회원가입`}
              </Link>
            </span>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default SignIn;