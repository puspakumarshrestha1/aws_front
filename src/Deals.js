import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Deals() {
  return (
    <>
      <Container className="deals py-5 ">
        <Row>
          <Col className="text-center ">
            <h2>Deals Of The Day</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="deal1">
            <Row>
              <Col className=" deal1-text text-end py-5 my-5 me-3"></Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col className="position-relative">
                <img
                  className="w-100"
                  src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/slider-1600-600-5.png"
                  alt=""
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <img
                  className="w-100"
                  src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/slider-1600-600-3.png"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Deals;
