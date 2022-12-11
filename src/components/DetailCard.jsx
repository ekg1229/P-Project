import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player/lazy';

function DetailCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" className="video_btn" onClick={handleShow}>
      자세히보기
      </Button>
      <Modal show={show} className="detail_card" size="lg" onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.date}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="detaile_video"><ReactPlayer
          controls="true"
           width="100%"
           height="100%"
           url={props.url}/></div></Modal.Body>
        <Modal.Body>
          {props.acdContent}
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