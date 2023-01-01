import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./QuoteApp.css";
import Card from "../Card/Card";
import Loader from "../Loader/Loading";
import UseFetch from "../UseFetch/UseFetch";
import { Button } from "react-bootstrap";
const QuoteApp = () => {
  const { quote, loading, reFetch, error } = UseFetch(
    "https://api.quotable.io/random"
  );
  if (loading) return <Loader type={"spinningBubbles"} color={"#fff"} />;
  return (
    <Container>
      <Row>
        <Col lg="4" md="6" className="mx-auto">
          <div className="box-2 p-5 rounded mt-5">
            <p className="fw-bold text-white text-center">Today's Top Quote</p>
            <Card quote={quote?.content} quote1={quote?.author} />
            <div className="me-auto">
              <Button variant={"primary"} onClick={reFetch}>
                Get Quote
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuoteApp;
