import React, {useState, useEffect} from 'react';
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';

//개인정보 수정 페이지
function EditInfo() {
  //서버에서 데이터 받아오기
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

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

  //이메일 받아오기
  const getData = () => {
    axios.get("http://localhost:8080/api/auth/personelInfo")
    .then(res => {
      console.log("success");
      setEmail(res.data.email);
    })
    .catch(res => {
      console.log("error");
      console.log(res);
    })
  }
  
  //개인정보 수정(이름)
  const putName = () => {
    axios.put("http://localhost:8080/api/auth/name", {
      name: name
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      }
    })
    .then(res => {
      console.log("success");
      setName(res.data.name);
    })
    .catch(res => {
      console.log("error");
      console.log(res);
    })
  }

  //개인정보 수정(나이)
  const putAge = () => {
    axios.put("http://localhost:8080/api/auth/age", {
      age: age
    },
    {
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      }
    })
    .then(res => {
      console.log("success");
      setName(res.data.name);
    })
    .catch(res => {
      console.log("error");
      console.log(res);
    })
  }

  useEffect(()=>{
    getData();
    return () => {
      console.log("개인정보 수정 페이지 종료");
    }
  }, []);

  return (
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">개인정보 수정 페이지</h3>
          </div>
          <Form className="mt-4" onSubmit={(e) => {handleSubmit(e)}}>
            {/* 아이디(이메일) 관련 */}
            <Form.Group id="email" className="mb-4">
              <Form.Label>이메일</Form.Label>
              <div className="form-floating mb-3">
                {email}
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

            {/* 개인정보 수정 관련 */}
            <Button variant="primary" type="submit" className="w-100" onClick={handleSubmit}>
              개인정보 수정
            </Button>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default EditInfo;