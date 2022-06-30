import React from "react";
import StatsRegionalChart from "../components/StatsRegionalChart.js";
import StatsRegionalTable from "../components/StatsRegionalTable.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function StatsRegional({ data }) {
  const regions = extractRegions(data);
  return regions.map((region, i) => (
    <section className="my-5" key={`StatsRegionalSection_${i}`}>
      <Container>
        <Row>
          <h2>{region.name} Region</h2>
        </Row>
        <Row>
          <Col lg={6} style={{ minHeight: "200px" }}>
            <StatsRegionalChart majalis={region.majalis} />
          </Col>
          <Col lg={6}>
            <StatsRegionalTable majalis={region.majalis} region={region} />
          </Col>
        </Row>
      </Container>
    </section>
  ));
}

function extractRegions(data) {
  let returnObject = data.regions.map((region) => {
    return {
      name: region.name,
      target: region.allTarget,
      count: region.all,
      atfalCount: region.atfalCount,
      atfalTarget: region.atfalTarget,
      khuddamCount: region.khuddamCount,
      khuddamTarget: region.khuddamTarget,
      majalis: data.majalis.filter((majlis) => {
        return majlis.region === region.name;
      }),
    };
  });
  return returnObject;
}
