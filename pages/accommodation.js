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
        <title>Ijtema 2023 | Accommodations</title>
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
      </main>
      <Footer />
    </>
  );
}
