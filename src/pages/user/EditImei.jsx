import React from "react";
import {Container, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';

//Seial 추가/삭제 페이지
function EditImei() {
  return(
    <Container>
      <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"></link>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">Seial 추가/삭제 페이지</h3>
          </div>
        </div>
      </Col>
    </Container>
  )
}

export default EditImei;