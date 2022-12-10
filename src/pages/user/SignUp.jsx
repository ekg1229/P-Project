import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Container, Col, Form, Button} from 'react-bootstrap';

//회원가입 페이지
function SignUp() {
  const [id, setInputId] = useState("");
  const [password, setInputPassword] = useState("");
  const [name, setInputName] = useState("");
  const [age, setInputAge] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputAge = (e) => {
    setInputAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //submit default 제출 막음
    console.log('You clicked submit.');

    axios.post('/api/auth/register', {
      //axios body에 보낼 데이터
      email: id,
      password: password,
      name: name,
      age: age
    },
    {
      //axios header
      headers:{
        withCredentials: true,
        'Content-Type': 'application/json',
        //'Authorization' : `Bearer ${accessToken}`
      }
    })
    .then((res) => {
      console.log("success");
      console.log(res)
      window.location.href="/signin" //로그인 페이지로 이동
    })
    .catch((err) => {
      console.log("error");
      console.log(err)
    })
  }

  const confirmPw = () => {
    var pw = document.getElementById("Password").value;
    var rpw = document.getElementById("rePassword").value;

    if(pw === "" || rpw === ""){ //null input
      document.getElementById("signup").disabled = true;
    }
    else if(pw !== rpw){ //not correct
      document.getElementById("signup").disabled = true; //제출 금지
      document.getElementById("CheckTrue").style.display="none" //result of confirm print
      document.getElementById("CheckFalse").style.display="block"
      document.getElementById("Password").readOnly= false;
      document.getElementById("rePassword").readOnly= false;
    }
    else{
      //alert("비밀번호가 일치합니다");
      document.getElementById("signup").disabled = false; //회원가입 버튼 활성화(비밀번호 검증이 끝났으므로)
      document.getElementById("CheckTrue").style.display="block" //result of confirm print
      document.getElementById("CheckFalse").style.display="none"
      document.getElementById("Password").readOnly= true; //비밀번호 입력 수정 불가
      document.getElementById("rePassword").readOnly= true; //비밀번호 재입력 수정 불가
    }
    return <confirm1/>
  }

  return (
    <Container>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">회원가입 페이지</h3>
          </div>
          <Form className="mt-4" onSubmit={(e) => {handleSubmit(e)}}>
            {/* 이메일 관련 */}
            <Form.Group id="email" className="mb-4" >
              <Form.Label>아이디</Form.Label>
              <div className="form-floating mb-3">
                <input type="email" class="form-control was-validate" id="floatingInput" placeholder="name@example.com" name="name" required maxlength="20" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"title="이메일 주소를 입력하세요." onChange={handleInputId}/>
                <label for="floatingInput" style={{color: "#BDBDBD"}}>이메일 주소를 입력해주세요</label>
                <div className="valid-feedback">
                  올바른 입력입니다.
                </div>
                <div className="invalid-feedback">
                  이메일 형식으로 입력하세요.
                </div>
              </div>
            </Form.Group>

            {/* 비밀번호 관련 */}
            <Form.Group id="password" className="mb-4">
              <Form.Label>비밀번호</Form.Label>
              <div class="form-floating">
                <input type="Password" class="form-control was-validate" id="Password" placeholder="Password" name="pwd" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPassword}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}} >비밀번호를 입력해주세요</label>
              </div>
            </Form.Group>

            {/* 비밀번호 확인 관련 */}
            <Form.Group id="confirmPassword" className="mb-4">
              <Form.Label>비밀번호 확인</Form.Label>
              <div class="form-floating">
                <input type="password" class="form-control was-validate" id="rePassword" placeholder="Password" name="pwd" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호를 다시 입력해주세요." onChange={handleInputPassword}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}}>비밀번호를 재입력해주세요</label>
                <div class="valid-feedback" id="CheckTrue">
                  비밀번호가 일치합니다.
                </div>
                <div class="invalid-feedback" id="CheckFalse">
                  비밀번호가 일치하지 않습니다.
                </div>
              </div>
              <h2></h2> {/* 여백을 위해 추가 */}
              <div>
                <Button variant="primary" id="confi" onClick={confirmPw}>비밀번호 확인</Button>
              </div>
            </Form.Group>

            {/* 이름 관련 */}
            <Form.Group id="Name" className="mb-4">
              <Form.Label>이름</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="floatingPassword" placeholder="Password" name="name" required maxlength="8" pattern="[ㄱ-힣]{1,8}" title="최대 8자까지의 한글만 입력가능합니다." onChange={handleInputName}/>
                <label for="floatingInput" style={{color: "#BDBDBD"}}>이름을 입력해주세요</label>
              </div>
            </Form.Group>

            {/* 나이 관련 */}
            <Form.Group id="Age" className="mb-4">
              <Form.Label>나이</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="floatingPassword" placeholder="Password" name="age" required maxlength="3" pattern="[0-9]{,3}" title="나이는 숫자로 입력하세요." onChange={handleInputAge}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}}>나이를 입력해주세요</label>
              </div>
            </Form.Group>

            {/* 회원가입 관련 */}
            <Button variant="primary" type="submit" className="w-100" id="signup" disabled={true} onClick={handleSubmit}>
              회원가입
            </Button>
          </Form>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <span className="fw-normal">
              이미 회원이신가요? &nbsp;
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

export default SignUp;

/*
 * 비밀번호 안 맞는데 확인되면 넘어가는 오류
 * IMEI 확인 로직 다시 확인
 */