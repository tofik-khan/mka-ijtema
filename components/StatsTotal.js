import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import StatsPieChart from "../components/StatsPieChart.js";

export default function StatsTotal({ data }) {
  return (
    <>
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h2>National Totals</h2>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={11}>
            <table class="table table-hover table-responsive">
              <thead>
                <tr>
                  <th>Auxilary</th>
                  <th className="d-none d-md-block">Tajneed</th>
                  <th>Ijtema Target</th>
                  <th>Registered</th>
                  <th>Target Reached</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Atfal</th>
                  <td className="d-none d-md-block">1,249</td>
                  <td>794</td>
                  <td>{data.totals.atfalCount}</td>
                  <td>
                    {(
                      (parseInt(data.totals.atfalCount.replace(",", "")) /
                        parseInt(data.totals.atfalTarget.replace(",", ""))) *
                      100
                    ).toFixed(2) + " %"}
                  </td>
                </tr>
                <tr>
                  <th>Khuddam</th>
                  <td className="d-none d-md-block">3,950</td>
                  <td>1,680</td>
                  <td>{data.totals.khuddamCount}</td>
                  <td>
                    {(
                      (parseInt(data.totals.khuddamCount.replace(",", "")) /
                        parseInt(data.totals.khuddamTarget.replace(",", ""))) *
                      100
                    ).toFixed(2) + " %"}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <StatsPieChart
              count={data.totals.atfalCount}
              target={data.totals.atfalTarget}
              aux="Atfal"
            />
            <h4 className="text-center pt-2">Atfal</h4>
          </Col>
          <Col md={6}>
            <StatsPieChart
              count={data.totals.khuddamCount}
              target={data.totals.khuddamTarget}
              aux="Khuddam"
            />
            <h4 className="text-center pt-2">Khuddam</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
