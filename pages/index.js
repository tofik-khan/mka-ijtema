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
import RegistrationCTA from "../components/RegistrationCTA.js";
import { Button } from "react-bootstrap";
import Link from "next/link";

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
        <RegistrationCTA />
        <Container>
          <h2 className="my-5 text-center">Message from Our Imam!</h2>
          <Row className="justify-content-center">
            <Col xs={10} md={8}>
              <YoutubeEmbed embedId="EjOzV1tELbc" />
            </Col>
          </Row>
        </Container>
        <Container className="mt-3 py-5 bg-light" fluid>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-center">Accommodations</h2>
              <p>
                While on-site sleeping arrangements are readily available at
                Masjid Bait-ur-Rahman for Ijtema, some may prefer the
                convenience of hotel accommodations. We have negotiated a rate
                for our Ijtema with Residence Inn (5 miles away). See details
                below:{" "}
              </p>
              <p>
                Residence Inn by Marriott (12000 Plum Orchard Drive, Silver
                Spring, MD 20904): $159 + tax per night using the below link or
                by calling: 301-572-2322. Guests should mention the discount
                code: MKA USA ROOM BLOCK. This code is valid from Friday, June
                23 (Check in) - Sunday, June 25 (Check out).{" "}
              </p>
              <p>
                Rooms can sleep 3-4 guests. Attendees are encouraged to book
                with their friends and relatives to save costs. The deadline to
                lock in the rates is June 1, 2023. Rooms are limited. If you
                have any questions, please reach out to Ali Chaudhry
                (240-997-6262).
              </p>
              <Link
                href="https://www.marriott.com/events/start.mi?id=1681742740326&key=GRP"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="dark">Reserve Hotel Room</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Moments />
      </main>
      <Footer />
    </>
  );
}
