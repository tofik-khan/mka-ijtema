import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as styles from "../styles/StatsOverview.module.css";

export default function StatsOverview({ data }) {
  let regionsColumn = data.regions.map((region, index) => {
    return (
      <Col md={3} className="my-3" key={index}>
        <h4>
          {region.name}{" "}
          <span className={styles.regionNumbers}>{region.all}</span>
        </h4>
      </Col>
    );
  });
  return (
    <section className="bg-dark py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs="auto">
            <h2 className={styles.totalNumbers}>
              {data.totals.all} Registered
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center py-5 text-light">
          {regionsColumn}
        </Row>
        <Row className="justify-content-end text-white">
          <Col xs="auto">{data.update}</Col>
        </Row>
      </Container>
    </section>
  );
}
