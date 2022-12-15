import React, {useState, useEffect} from 'react';
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import Popup from "../../components/Popup";

//개인정보 수정 페이지
function EditInfo() {
  //서버에서 데이터 받아오기
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    putName();
    putAge();
  }

  //개인정보 받아오기
  const getData = () => {
    axios.get("/api/auth/personelInfo")
    .then(res => {
      setEmail(res.data.email);
    })
    .catch(res => {
      setPopup({
        open: true,
        title: "개인정보 확인 오류",
        message: "개인정보를 읽을 수 없습니다."
      });
    })
  }
  
  //개인정보 수정(이름)
  const putName = () => {
    axios.put("/api/auth/name", {
      name: name
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      }
    })
    .then(res => {
      setName(res.data.name);
    })
    .catch(res => {
      setPopup({
        open: true,
        title: "이름 수정 오류",
        message: "이름을 수정할 수 없습니다."
      });
    })
  }

  //개인정보 수정(나이)
  const putAge = () => {
    axios.put("/api/auth/age", {
      age: age
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      }
    })
    .then(res => {
      setName(res.data.name);
    })
    .catch(res => {
      setPopup({
        open: true,
        title: "나이 수정 오류",
        message: "나이를 수정할 수 없습니다."
      });
    })
  }

  useEffect(()=>{
    getData();
  }, []);

  return (
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500" style={{opacity: 0.9, border: "1px solid #282c34", background: "#282c34"}}>
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h2 className="mb-0" style={{color: "white"}}>개인정보 수정</h2>
          </div>
          <Form className="mt-4" onSubmit={(e) => {handleSubmit(e)}}>
            {/* 아이디(이메일) 관련 */}
            <Form.Group id="email" className="mb-4">
              <Form.Label style={{color: "white", fontSize: "1.2rem"}}>이메일</Form.Label>
              <div className="form-floating mb-3" style={{color: "white", fontSize: "1.2rem"}}>
                {email}
              </div>
            </Form.Group>

            {/* 이름 관련 */}
            <Form.Group id="Name" className="mb-4">
              <Form.Label style={{color: "white", fontSize: "1.2rem"}}>이름</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="floatingPassword" placeholder="Password" name="name" required maxlength="8" pattern="[ㄱ-힣]{1,8}" title="최대 8자까지의 한글만 입력가능합니다." onChange={handleInputName}/>
                <label for="floatingInput" style={{color: "#BDBDBD"}}>이름을 입력해주세요</label>
              </div>
            </Form.Group>

            {/* 나이 관련 */}
            <Form.Group id="Age" className="mb-4">
              <Form.Label style={{color: "white", fontSize: "1.2rem"}}>나이</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="floatingPassword" placeholder="Password" name="age" required maxlength="3" pattern="[0-9]{,3}" title="나이는 숫자로 입력하세요." onChange={handleInputAge}/>
                <label for="floatingPassword" style={{color: "#BDBDBD"}}>나이를 입력해주세요</label>
              </div>
            </Form.Group>

            {/* 개인정보 수정 관련 */}
            <Button variant="primary" type="submit" className="w-100" onClick={handleSubmit} style={{fontSize: "1.2rem"}}>
              개인정보 수정
            </Button>
          </Form>
        </div>
      </Col>
      <div>
        <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
      </div>
    </Container>
  );
}

export default EditInfo;