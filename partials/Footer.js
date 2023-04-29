import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="bg-light w-100 py-5">
      <Container>
        <Row className=" justify-content-center justify-content-lg-between align-items-center text-center text-lg-left">
          <Col
            sm="12"
            md="auto"
            className="order-last order-lg-first mt-4 mt-lg-0"
          >
            <a href="https://mkausa.org">
              <img src="/mka-logomark.svg" width={200} />
            </a>
            <div className="py-2 text-italic text-muted">
              &copy; MKA USA 2022. All rights reserved
            </div>
          </Col>
          <Col sm="12" md="auto" className="order-first order-lg-last">
            <div
              className="py-2"
              style={{
                fontFamily: "'Noto Nastaliq Urdu', serif;",
              }}
            >
              قوموں کی اصلاح نوجوانوں کی اصلاح کے بغیر نہیں ہو سکتی
            </div>
            <div>
              Nations cannot be reformed without the reformation of the youth
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
