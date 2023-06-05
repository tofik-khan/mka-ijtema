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
        <title>Ijtema 2023 | Transport</title>
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
              <h2 className="text-center">Transportation</h2>
              <p>Information about Transportation will be shared here</p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
