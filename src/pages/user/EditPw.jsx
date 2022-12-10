import React, {useState, useEffect} from 'react';
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';

//개인정보 확인 페이지
function EditPw() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleInputNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  // 비밀번호 변경 버튼 클릭 이벤트
  const handleEditPw = (e) => {
    e.preventDefault(); //submit default 제출 막음
    console.log("click_EditPw");

    console.log(password);
    console.log(newPassword);

    //axios 통신
    axios.put("http://localhost:8080/api/auth/password", {
      password: password,
      newPassword: newPassword
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const confirmPw = () => {
    var npw = document.getElementById("newPassword").value;
    console.log("npw: "+npw);
    var rpw = document.getElementById("rePassword").value;
    console.log("rpw: "+rpw);

    if(npw === "" || rpw === ""){ //null input
      document.getElementById("EditPw").disabled = true;
    }
    else if(npw !== rpw){ //not correct
      document.getElementById("EditPw").disabled = true; //제출 금지
      document.getElementById("CheckTrue").style.display="none" //result of confirm print
      document.getElementById("CheckFalse").style.display="block"
      document.getElementById("newPassword").readOnly= false;
      document.getElementById("rePassword").readOnly= false;
    }
    else{
      //alert("비밀번호가 일치합니다");
      document.getElementById("EditPw").disabled = false; //비밀번호 변경 버튼 활성화(비밀번호 검증이 끝났으므로)
      document.getElementById("CheckTrue").style.display="block" //result of confirm print
      document.getElementById("CheckFalse").style.display="none"
      document.getElementById("newPassword").readOnly= true; //비밀번호 입력 수정 불가
      document.getElementById("rePassword").readOnly= true; //비밀번호 재입력 수정 불가
    }
    console.log(<confirm1/>);
    return <confirm1/>
  }

  useEffect(()=>{
    return () => {
      console.log("비밀번호 변경 페이지 종료");
    }
  }, []);

  return (
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <Form className="mt-4" onSubmit={(e) => {handleEditPw(e)}}>
            {/* 현재 비밀번호 관련 */}
            <Form.Group id="password1" className="mb-4">
              <Form.Label>현재 비밀번호</Form.Label>
              <div class="form-floating">
                <input type="Password" class="form-control was-validate" id="Password" placeholder="Password" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPassword}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}} >현재 비밀번호를 입력해주세요</label>
              </div>
            </Form.Group>

            {/* 신규 비밀번호 관련 */}
            <Form.Group id="password2" className="mb-4">
              <Form.Label>신규 비밀번호</Form.Label>
              <div class="form-floating">
                <input type="Password" class="form-control was-validate" id="newPassword" placeholder="newPassword" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputNewPassword}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}} >신규 비밀번호를 입력해주세요</label>
              </div>
            </Form.Group>

            {/* 비밀번호 확인 관련 */}
            <Form.Group id="confirmPassword" className="mb-4">
              <Form.Label>신규 비밀번호 확인</Form.Label>
              <div class="form-floating">
                <input type="password" class="form-control was-validate" id="rePassword" placeholder="ConfirmPassword" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호를 다시 입력해주세요." onChange={handleInputNewPassword}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}}>신규 비밀번호를 재입력해주세요</label>
                <div class="valid-feedback" id="CheckTrue">
                  비밀번호가 일치합니다.
                </div>
                <div class="invalid-feedback" id="CheckFalse">
                  비밀번호가 일치하지 않습니다.
                </div>
              </div>
              <h2></h2> {/* 여백을 위해 추가 */}
              <div>
                <Button variant="primary" onClick={confirmPw}>비밀번호 확인</Button>
              </div>
            </Form.Group>

            {/* 비밀번호 변경 관련 */}
            <Button variant="primary" type="submit" className="w-100" id='EditPw' disabled={true} onClick={handleEditPw}>
              비밀번호 변경
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default EditPw;