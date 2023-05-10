import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function Page() {
  return (
    <>
      <Header data={{ title: "NW Regional Ijtema | Program" }} />
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h1>From the Nazim Accommodations</h1>
            <p>
              In order to make your ijtema experience safe, inclusive,
              comfortable and enjoyable, the Ijtema Administration suggests
              bringing the following items:
            </p>
            <ul className="text-start">
              <li>Extra Clothes</li>
              <li>Sports wear</li>
              <li>Shoes for Hiking and Sports</li>
              <li>Cap for prayer</li>
              <li>Prayer Mats</li>
              <li>Jackets &amp; windbreaker for colder weather</li>
              <li>Toiletries</li>
              <li>Water bottle</li>
              <li>Medicine (if any)</li>
              <li>Day bag to carry items</li>
              <li>Sunscreen</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
