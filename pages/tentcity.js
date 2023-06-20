import React from "react";
import tentcityImage from "../public/tentcity.jpg";
import firesidechatWithSadrSb from "../public/firesidechat-with-sadrsb.jpeg";

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
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Image src={tentcityImage} width={988} height={1280} />
            </Col>
            <Col md={6}>
              <Image src={firesidechatWithSadrSb} width={1080} height={1080} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h2>Wilderness Survival Training</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>How to start a fire</li>
                <li>Setting up tarp shelter</li>
                <li>
                  Developing the Mindset to Survive and Thrive When Disaster
                  Strikes
                </li>
                <li>First Aid/Wound care in wilderness</li>
                <li>Air rifle </li>
                <li>How to find qibla</li>
                <li>Basic navigation/reading a map</li>
                <li>Stargazing</li>
                <li>Different Types of Knots and uses</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <Row>
            <Col>
              <h2>Things to Bring</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>Personal Medications</li>
                <li>Rain Jacket</li>
                <li>Insulated Jacket/ Fleece for cold.</li>
                <li>Beanie</li>
                <li>Prayer cap</li>
                <li>MKA Scarf</li>
                <li>Suitable shoes</li>
                <li>Flip flops</li>
                <li>Towel</li>
                <li>Sleeping bag</li>
                <li>Refillable water bottle</li>
                <li>Small backpack/ daypack</li>
                <li>Sleeping Bag</li>
                <li>Baby Wipes - In case a shower is not available.</li>
                <li>Toiletries</li>
                <li>Headlamp/ tent lantern</li>
              </ul>
              <em>Optional:</em>
              <ul>
                <li>Sunscreen</li>
                <li>Small Towel for Daypack.</li>
                <li>Hat with brim /Baseball Cap</li>
                <li>Lightweight gloves</li>
                <li>Pillow</li>
                <li>Sleeping pad/ foam pad</li>
                <li>Power bank</li>
                <li>Sunglasses</li>
                <li>Mints</li>
                <li>Ittar</li>
                <li>Compass</li>
                <li>Generally, try to travel light.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
