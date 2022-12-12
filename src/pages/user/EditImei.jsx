import React, {useState, useEffect} from "react";
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import "../../styles/user/EditImei.css"
import trash from "../../images/trash.png"
import Popup from "../../components/Popup";

//Serial 추가/삭제 페이지
function EditImei() {
  const [data, setData] = useState([]);
  const [imei, setImei] = useState("");
  const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});

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
      console.log(res);
      if(res.data == null){
        setPopup({
          open: true,
          title: "Serial 중복 오류",
          message: "Serial 번호가 중복됩니다. 다시 입력하세요."
        });
      }
      else if(res.data == true){
        setData((prevItem)=>{
          return[
            {
              user_id: data.length + 1,
              imei: data,
            },
            ...prevItem,
          ]
        });

        setPopup({
          open: true,
          title: "Serial 추가 성공!",
          message: "Serial 번호가 추가되었습니다."
        });
      }
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    })
  }

  const getImei = () => {
    axios.get('/api/blockchain/imeiList', {
      headers:{
        withCredentials: true,
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log("success");
      console.log(res);
      setData(res.data);
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    })
  }

  const deleteImei = (imei) => {
    axios.delete('http://localhost:8080/api/blockchain/imei', {
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
      console.log(res);
      setData((data) => data.filter((data) => data.imei != imei));
      console.log(data);
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
      console.log(data);
      console.log(imei);
      console.log(data.imei);
    })
  }

  useEffect(() => {
    getImei();

    return () => {
      console.log("Serial 추가/삭제 페이지 종료");
    }
  }, []);

  return(
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">Serial 추가/삭제 페이지</h3>
          </div>
          <Form className="mt-4">
            {/* Serial 추가/삭제 관련 */}
            <Form.Group id="confirmimei" className="mb-4">
              <Form.Label>Serial 추가/삭제</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="imei" placeholder="Password" name="imei" pattern="[0-9a-zA-Z]{10}" title="Serial은 숫자, 영문 대소문자로 이루어집니다." onChange={handleImei} readOnly={false}/>
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

            {/* Serial 추가/삭제 버튼 관련 */}
            <Button variant="primary" type="submit" className="w-100" id='confirm2' onClick={addImei}>
              Serial 추가
            </Button>
          </Form>
          {/* Serial Card */}
          <div id="element-list">
            <ul id="list">
            {data.map((item) => {return <li key={item.user_id}>Serial-{item.user_id}: {item.imei}
              <img src={trash} onClick={() => deleteImei(item.imei)} alt="trash"></img></li>})}
            </ul>
          </div>
        </div>
      </Col>
      <div>
        <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
      </div>
    </Container>
  )
}

export default EditImei;