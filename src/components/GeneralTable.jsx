import React, {useEffect, useState} from 'react';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';

function GeneralTable(props){
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return(
    <>
      <Button variant="outline-dark" className="video_btn" style={{marginLeft: "30rem"}} onClick={handleShow}>자세히보기</Button>
      <Modal show={show} className="d-flex align-items-center justify-content-center" size="lg" onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"40px"}}>일반 조회</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{fontSize:'30px',margin:'10px'}}>{props.time}</div>
        </Modal.Body>

        <Modal.Body>
        <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>가속도</div><br/>
                    {props.sensors[0][0]}<br/>
                    {props.sensors[0][1]}<br/>
                    {props.sensors[0][2]}<br/>
                  </Col>
                  <Col>
                    <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>자이로</div><br/>
                    {props.sensors[0][3]}<br/>
                    {props.sensors[0][4]}<br/>
                    {props.sensors[0][5]}<br/>
                  </Col>
                  <Col>
                    <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>지자기</div><br/>
                    {props.sensors[0][6]}<br/>
                    {props.sensors[0][7]}<br/>
                    {props.sensors[0][8]}<br/>
                  </Col>
                  <Col>
                    <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>온도</div><br/>
                    {props.sensors[0][9]}<br/>
                  </Col>
              </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GeneralTable;