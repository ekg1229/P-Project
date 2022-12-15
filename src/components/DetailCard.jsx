import React, { useState, useEffect } from 'react';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';

//자세히 보기
function DetailCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" className="video_btn fs-5" onClick={handleShow}>자세히보기</Button>
      <Modal show={show} className="detail_card" size="lg" onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"40px"}}>사고기록</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{fontSize:'30px',margin:'10px'}}>{props.time}</div>
          <div className="detaile_video">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              url={props.video}/>
          </div>
        </Modal.Body>
        <hr/>
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
            
              <Col>
                <Row>
                  <Col>
                  {/* <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>가속도</div> */}
                  </Col>
                  <Col>
                  {/* <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>자이로</div> */}
                  <br/>
                  </Col>
                  <Col>
                  {/* <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>지자기</div> */}
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
}

export default DetailCard;