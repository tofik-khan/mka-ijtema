import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import StatsPieChart from "../components/StatsPieChart.js";

export default function StatsTotal({ data }) {
  return (
    <Container className="py-5">
      <Row className="text-center">
        <Col>
          <h2>National Total</h2>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h4>
            Atfal Goal:{" "}
            {(
              (parseInt(data.totals.atfalCount.replace(",", "")) /
                parseInt(data.totals.atfalTarget.replace(",", ""))) *
              100
            ).toFixed(2)}{" "}
            %
          </h4>
        </Col>
        <Col>
          <h4>
            Khuddam Goal:{" "}
            {(
              (parseInt(data.totals.khuddamCount.replace(",", "")) /
                parseInt(data.totals.khuddamTarget.replace(",", ""))) *
              100
            ).toFixed(2)}{" "}
            %
          </h4>
        </Col>
      </Row>
    </Container>
  );
}
