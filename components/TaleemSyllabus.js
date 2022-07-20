import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import { FiletypePdf } from "react-bootstrap-icons";

export default function TaleemSyllabus() {
  return (
    <Container fluid className="w-100 bg-dark">
      <Row className="py-5 justify-content-center">
        <Col xs="auto">
          <h2 className="text-warning">
            <Button variant="outline-warning btn-lg">
              Syllabus <FiletypePdf size={20} />
            </Button>
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
