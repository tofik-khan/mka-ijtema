import React from "react";
import tentcityImage from "../public/tentcity.jpg";

import Nav from "../partials/Nav.js";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image.js";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ijtema 2023 | TentCity</title>
        <meta
          name="description"
          content="Majlis Khuddam-ul-Ahmadiyya (MKA) holds its National Ijtema for 2023 at Bait-ur-Rehman Mosque, MD for a weekend of fun activites and brotherly connection."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <main className="mainContent">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Image src={tentcityImage} width={988} height={1280} />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
