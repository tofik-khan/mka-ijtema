import React from "react";

import Placeholder from "react-bootstrap/Placeholder";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as styles from "../styles/StatsOverview.module.css";

export default function StatsOverviewPlaceholder() {
  let regionsColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    (region, index) => {
      return (
        <Col md={3} className="my-3" key={index}>
          <h4>
            <span className={styles.regionNumbers}>
              <Placeholder as="p" animation="wave">
                <Placeholder xs={6} />
              </Placeholder>
            </span>
          </h4>
        </Col>
      );
    }
  );
  return (
    <section className="bg-dark py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs="auto">
            <h2 className={styles.totalNumbers}>
              <Placeholder animation="wave">
                <Placeholder xs={12} />
              </Placeholder>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center py-5 text-light">
          {regionsColumn}
        </Row>
        <Row className="justify-content-end text-white">
          <Col xs="auto">Loading...</Col>
        </Row>
      </Container>
    </section>
  );
}
