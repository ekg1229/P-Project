import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Form, Button} from 'react-bootstrap';
import Popup from "../../components/Popup";

//비밀번호 찾기 페이지
function ForgotInfo() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});

  const handleId = (e) => {
    setEmail(e.target.value);
  };

  const onClickForgot = () => {
    axios.put('/api/auth/unknownPassword', {
      email: email,
    },
    {
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log(res);
      if(res.status === 200){
        setPopup({
          open: true,
          title: "비밀번호 찾기 성공!",
          message: "비밀번호가 변경되었습니다. 이메일을 확인해주세요."
        })
        //go to signin page
        window.location.href="/signin"
      }
      else{
        setPopup({
          open: true,
          title: "비밀번호 찾기 오류",
          message: "이메일을 확인해주세요."
        })
      }
    })
    .catch((err) => {
      console.log(err);
      setPopup({
        open: true,
        title: "비밀번호 찾기 오류",
        message: "서버에 문제가 있습니다. 다시 시도해주세요."
      });
    })
  }

  return (
    <div className="wrapper">
      <section className="main_visual">
        <Container>
          <Col xs={12} className="d-flex align-items-center justify-content-center">
            <div className="shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500" style={{opacity: 0.9, border: "1px solid #282c34", background: "#282c34"}}>
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h3 className="mb-0" style={{color: "white"}}>비밀번호 찾기</h3>
              </div>
              <Form className="mt-4">
                {/* 이메일 관련 */}
                <Form.Group id="email" className="mb-4">
                  <Form.Label style={{color: "white"}}>이메일</Form.Label>
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
                <span className="fw-normal" style={{color: "white"}}>
                  비밀번호가 기억나셨나요? &nbsp;
                  <Link to="/signin" className="fw-bold">
                    {`로그인`}
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

export default ForgotInfo;