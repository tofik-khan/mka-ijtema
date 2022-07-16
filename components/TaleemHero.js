import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as styles from "../styles/Taleem.module.css";

import Image from "next/image";

export default function TaleemHero() {
  return (
    <section>
      <Container>
        <Row className="text-center text-md-left">
          <Col sm={12} md={6}>
            <Image src="/Ijtema-logo.png" width={300} height={300} />
          </Col>
          <Col sm={12} md={6}>
            <h1 className={styles.heading}>
              <br />
              Taleem
              <br />
              Syllabus
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
