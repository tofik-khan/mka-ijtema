import * as styles from "../styles/HomeHero.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

export default function HomeHero() {
  return (
    <div className={styles.container}>
      <Container>
        <Row className="text-center text-md-left">
          <Col sm={12} md={6}>
            <Image src="/Ijtema-logo.png" width={300} height={300} />
          </Col>
          <Col sm={12} md={6}>
            <h1 className={styles.heading}>
              <span className={styles.headingLabel}>
                JazakAllah for Attending
              </span>
              <br />
              Ijtema 2022
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
