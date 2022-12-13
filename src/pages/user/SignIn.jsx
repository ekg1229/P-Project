import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Form, Card, Button} from 'react-bootstrap';
import Popup from "../../components/Popup";

//로그인 페이지
function SignIn() {
  const [id, setInputId] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});

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

  // login 버튼 클릭 이벤트
  const handleLogin = () => {
    console.log("click");
    //axios 통신
    axios.post('/api/auth/login', {
      email: id,
      password: password
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      }
    })
    .then((res) => {
      console.log("success");
      console.log(res);
      const {accessToken} = JSON.stringify(res.data.accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      //token을 LS에 저장
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.data.refreshToken);
      
      if (res.status === 200) {
        window.location.href = "/main";
      }
    })
    .catch((err) => {
      console.log("error");
      console.log(err)
      setPopup({
        open: true,
        title: "로그인 오류",
        message: "이메일 혹은 비밀번호가 잘못되었습니다. 다시 입력하세요."
      });
    })
  }

  return (
    <div className="wrapper">
      <section className="main_visual">
        <Container>
          <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
          <Col xs={12} className="d-flex align-items-center justify-content-center">
            <div className="shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500" style={{opacity: 0.9, border: "1px solid #282c34", background: "#282c34"}}>
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h2 className="mb-0" style={{color: "white"}}>로그인 페이지</h2>
              </div>
              <Form className="mt-4">
                {/* 아이디 관련 */}
                <Form.Group id="email" className="mb-4">
                  <Form.Label style={{color: "white"}}>이메일</Form.Label>
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
                    <Form.Label style={{color: "white"}}>비밀번호</Form.Label>
                    <Card.Link href='/forgotpw' className="small text-end" style={{textAlign:"center", float:"right"}}>비밀번호를 잊으셨나요?</Card.Link>
                    <div className="form-floating">
                      <input type="password" className="form-control was-validate" id="password" placeholder="Password" name="pwd" required maxLength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPassword}/>
                      <label htmlFor="floatingPassword" style={{color: "#BDBDBD"}}>비밀번호를 입력하세요</label>
                      <div className="valid-feedback">
                        올바른 입력입니다.
                      </div>
                      <div className="invalid-feedback">
                        5글자 이상 10글자 이하로 작성해 주세요.
                      </div>
                      <div class="eyes">
                        <i class="fas fa-eye"></i>
                      </div>
                    </div>
                  </Form.Group>
                  
                </Form.Group>
                {/* 로그인 관련 */}
                <Button variant="primary" className="w-100" onClick={handleLogin}>
                  로그인
                </Button>
              </Form>

              <div className="d-flex justify-content-center align-items-center mt-4">
                <span className="fw-normal" style={{color: "white"}}>
                  회원이 아니신가요? &nbsp;
                  <Link to="/signup" className="fw-bold">
                    {`회원가입`}
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <div>
            <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SignIn;