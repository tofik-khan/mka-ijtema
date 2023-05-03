import * as styles from "../styles/Hero.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

export default function FaqHero() {
  return (
    <div className={styles.container}>
      <Container>
        <Row className="text-center text-md-left align-content-center">
          <Col sm={12} md={6}>
            <Image src="/Ijtema-logo.png" width={300} height={300} />
          </Col>
          <Col sm={12} md={6} className="align-content-center">
            <h1 className={styles.heading}>
              <br />
              FAQs
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
