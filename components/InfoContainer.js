import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function InfoContainer() {
  return (
    <div className="infoContainer my-3">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Information</h2>
            <h3>Theme</h3>
            <div>Living Connection with Allah</div>
            <h3>Dates</h3>
            <div>August 19-21 2022</div>
            <h3>Venue</h3>
            <div>Masjid Bait-ur-Rehman, MD</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
