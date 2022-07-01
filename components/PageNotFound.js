import React from "react";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import * as styles from "../styles/PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <section className={styles.section + " d-flex align-items-center"}>
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col xs="auto">
            <h1 className={styles.heading}>
              404
              <br />
              <span className={styles.subHeading}>Page Not Found</span>
            </h1>
            <Link href="/">
              <Button variant="outline-warning" className="btn btn-outline">
                Return Home
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
