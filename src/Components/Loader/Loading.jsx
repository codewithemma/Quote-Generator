import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <Container>
    <Row>
      <Col lg="6">
        <div className="mt-5 mx-auto">
          <ReactLoading
            type={type}
            color={color}
            height={"75%"}
            width={"75%"}
          />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Loader;
