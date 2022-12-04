import React from 'react';
import {Container, Col} from 'react-bootstrap';

//개인정보 수정 페이지
function EditInfo() {
  return (
    <Container>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
          <div className="text-center text-md-center mb-4 mt-md-0">
            <h3 className="mb-0">개인정보 수정 페이지</h3>
          </div>
        </div>
      </Col>
    </Container>
  );
}

export default EditInfo;