import React from "react";

import Nav from "../partials/Nav.js";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ijtema 2023 | Register</title>
        <meta
          name="description"
          content="Majlis Khuddam-ul-Ahmadiyya (MKA) holds its National Ijtema for 2023 at Bait-ur-Rehman Mosque, MD for a weekend of fun activites and brotherly connection."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <main className="mainContent">
        <Container className="mt-3 py-5" fluid>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-center">Registration</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto">
              <p>
                <Link
                  href="https://form.typeform.com/to/RIIZNR2Z"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="warning btn-lg">Khuddam Form</Button>
                </Link>
              </p>
            </Col>
            <Col xs="auto">
              <p>
                <Link
                  href="https://docs.google.com/forms/d/1fa6X0w_-A7wd9sIxiAEcuwx6b2KzPv2SEF58kKvCewo/viewform?edit_requested=true#respon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="warning btn-lg">Atfal Form</Button>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
