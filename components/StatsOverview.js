import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as styles from "../styles/StatsOverview.module.css";

let majalisHashMap = [
  { majlis: "Baltimore", region: "East" },
  { majlis: "Central Jersey", region: "East" },
  { majlis: "Harrisburg", region: "East" },
  { majlis: "North Jersey", region: "East" },
  { majlis: "Philadelphia", region: "East" },
  { majlis: "Willingboro", region: "East" },
  { majlis: "Cleveland", region: "Great Lakes" },
  { majlis: "Columbus", region: "Great Lakes" },
  { majlis: "Dayton", region: "Great Lakes" },
  { majlis: "Detroit", region: "Great Lakes" },
  { majlis: "Indiana", region: "Great Lakes" },
  { majlis: "Kentucky", region: "Great Lakes" },
  { majlis: "Pittsburgh", region: "Great Lakes" },
  { majlis: "Austin", region: "Gulf" },
  { majlis: "Dallas", region: "Gulf" },
  { majlis: "Fort Worth", region: "Gulf" },
  { majlis: "Houston", region: "Gulf" },
  { majlis: "Tulsa", region: "Gulf" },
  { majlis: "Chicago", region: "Midwest" },
  { majlis: "Kansas City", region: "Midwest" },
  { majlis: "Milwaukee", region: "Midwest" },
  { majlis: "Minnesota", region: "Midwest" },
  { majlis: "Oshkosh", region: "Midwest" },
  { majlis: "Saint Louis", region: "Midwest" },
  { majlis: "Zion", region: "Midwest" },
  { majlis: "Bronx", region: "New York Metro" },
  { majlis: "Brooklyn", region: "New York Metro" },
  { majlis: "Long Island", region: "New York Metro" },
  { majlis: "Queens", region: "New York Metro" },
  { majlis: "Connecticut", region: "Northeast" },
  { majlis: "Albany", region: "Northeast" },
  { majlis: "Binghamton", region: "Northeast" },
  { majlis: "Boston", region: "Northeast" },
  { majlis: "Buffalo", region: "Northeast" },
  { majlis: "Fitchburg", region: "Northeast" },
  { majlis: "Rochester", region: "Northeast" },
  { majlis: "Syracuse", region: "Northeast" },
  { majlis: "Bay Point", region: "Northwest" },
  { majlis: "Portland", region: "Northwest" },
  { majlis: "Sacramento", region: "Northwest" },
  { majlis: "Seattle", region: "Northwest" },
  { majlis: "Silicon Valley", region: "Northwest" },
  { majlis: "Atlanta", region: "Southeast" },
  { majlis: "Charlotte", region: "Southeast" },
  { majlis: "Miami", region: "Southeast" },
  { majlis: "Orlando", region: "Southeast" },
  { majlis: "Tennessee", region: "Southeast" },
  { majlis: "Las Vegas", region: "Southwest" },
  { majlis: "Los Angeles", region: "Southwest" },
  { majlis: "Phoenix", region: "Southwest" },
  { majlis: "Tucson", region: "Southwest" },
  { majlis: "North Virginia", region: "Virginia" },
  { majlis: "Richmond", region: "Virginia" },
  { majlis: "RTP", region: "Virginia" },
  { majlis: "South Virginia", region: "Virginia" },
  { majlis: "Muqami", region: "Muqami" },
];

export default function StatsOverview({ data }) {
  updateAttendance(data);
  const regions = createRegionalAttendance(data);

  return (
    <section className="bg-dark py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs="auto">
            <h2 className={styles.totalNumbers}>
              {Object.values(data).reduce((accumulator, value) => {
                return accumulator + value;
              }, 0)}{" "}
              Registered
            </h2>
          </Col>
        </Row>
        <Row className="py-5 text-light">
          {Object.keys(regions).map((region, index) => {
            return (
              <Col md={4} key={index}>
                <h4>
                  {region}{" "}
                  <span className={styles.regionNumbers}>
                    {regions[region]}
                  </span>
                </h4>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

function updateAttendance(data) {
  majalisHashMap = majalisHashMap.map((element) => {
    element.khudam = data[element.majlis] || 0;
    return element;
  });
}

function createRegionalAttendance(data) {
  let regions = [];
  majalisHashMap.forEach((element) => {
    regions[element.region] = regions[element.region]
      ? regions[element.region] + element.khudam
      : element.khudam;
  });
  return regions;
}
