import Head from "next/head";
import React from "react";

import Nav from "../components/Nav.js";

import Hero from "../components/Hero.js";
import InfoContainer from "../components/InfoContainer.js";

import Moments from "../components/Moments.js";
import Footer from "../components/Footer.js";
import YoutubeEmbed from "../components/YoutubeEmbed.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ijtema 2023</title>
        <meta
          name="description"
          content="Majlis Khuddam-ul-Ahmadiyya (MKA) holds its National Ijtema for 2022 at Bait-ur-Rehman Mosque, MD for a weekend of fun activites and brotherly connection."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Noto+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main className="mainContent">
        <Hero />
        <InfoContainer />
        <Container>
        <h2 className="my-5 text-center">Message from Our Imam!</h2>
          <Row className="justify-content-center">
            <Col xs={10} md={8}>
              <YoutubeEmbed embedId="EjOzV1tELbc" />
            </Col>
          </Row>
        </Container>
        <Moments />
      </main>
      <Footer />
    </>
  );
}
