import React from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import * as styles from "../styles/StatsHero.module.css";

import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Footer from "../components/Footer.js";

export default function Register() {
  return (
    <>
      <Header
        data={{
          title: "Registration (Closed) - Ijtema 2022",
          description:
            "Registration for MKA Ijtema 2022 is closed. Please register on site when you come to check in. Jazakallah",
        }}
      />
      <Nav />
      <main className="mainContent">
        <Container className="py-5">
          <Row className="text-center text-md-left align-content-center">
            <Col sm={12} md={6}>
              <Image src="/Ijtema-logo.png" width={300} height={300} />
            </Col>
            <Col sm={12} md={6} className="align-content-center">
              <h1 className={styles.heading}>Ijtema Registration</h1>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={6}>
              <strong>Pre-registration has closed.</strong>
              <br /> Please register on-site when you arrive at Ijtema.
              <p className="mt-3">
                If you need any assistance with airport pickup or drop-off,
                please contact Nazim Transportation (Abdul Majeed) at{" "}
                <a href="tel:(240) 564-3348">(240) 564-3348</a>. Alternatively,
                you can contact Ansar Malik at{" "}
                <a href="tel:(240) 491-7750">(240) 491-7750</a>.
              </p>{" "}
              JazakAllah.
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
