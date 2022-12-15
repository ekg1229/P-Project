import React, {useState, useEffect} from "react";
import {Container, Col, Form, Button} from 'react-bootstrap';
import trash from "../../images/trash.png"
import Popup from "../../components/Popup";
import axios from 'axios';
import "../../styles/user/EditImei.css"

//Serial 추가/삭제 페이지
function EditImei() {
  const [imei, setImei] = useState("");
  const [data, setData] = useState([]);
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
              user_id: 1,
              imei: imei,
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
      setPopup({
        open: true,
        title: "Serial 추가 실패",
        message: "Serial 추가에 실패했습니다."
      });
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
      setData(res.data);
    })
    .catch((err) => {
    })
  }

  const deleteImei = (imei) => {
    axios.delete('/api/blockchain/imei', {
      headers:{
        withCredentials: true,
        'Content-Type': 'application/json',
      },
      data:{
        imei: imei
      }
    })
    .then((res) => {
      setData((data) => data.filter((data) => data.imei != imei));
      if(res.data == true){
        setPopup({
          open: true,
          title: "Serial 삭제 성공!",
          message: "Serial 삭제에 성공했습니다."
        });
      }
    })
    .catch((err) => {
    })
  }

  useEffect(() => {
    getImei();
  }, []);

  return(
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500" style={{opacity: 0.9, border: "1px solid #282c34", background: "#282c34"}}>
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h2 className="mb-0" style={{color: "white"}}>S/N 추가</h2>
          </div>
          <Form className="mt-4">
            {/* Serial 추가/삭제 관련 */}
            <Form.Group id="confirmimei" className="mb-4">
              <Form.Label style={{color: "white", fontSize: "1.2rem"}}>Serial 추가</Form.Label>
              <div class="form-floating">
                <input type="text" class="form-control was-validate" id="imei" placeholder="Password" name="imei" title="Serial은 숫자, 영문 대소문자로 이루어집니다." onChange={handleImei} readOnly={false}/>
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
            <Button variant="primary" type="submit" className="w-100" id='confirm2' onClick={addImei} style={{fontSize: "1.2rem"}}>
              Serial 추가
            </Button>
          </Form>

          <hr color="white" size="5"/>

          {/* Serial List */}
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h2 className="mb-0" style={{color: "white", marginTop: "1.5rem"}}>S/N 리스트</h2>
          </div>
          <div id="element-list">
            <ul id="list" style={{fontSize: "1.3rem", fontWeight: "bold"}}>
            {data.map((item) => {return <li key={item.user_id}>{item.imei}
              <img className="img_trash" src={trash} onClick={() => deleteImei(item.imei)} alt="trash"></img></li>})}
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