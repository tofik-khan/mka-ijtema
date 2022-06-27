import Head from "next/head";
import Image from "next/image";
import React from "react";
import Nav from "../components/Nav.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Headshot from "../components/Headshot.js";

import Footer from "../components/Footer.js";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Ijtema 2022</title>
        <meta name="description" content="MKA National Ijtema 2022" />
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
        <Container className="pt-5">
          <Row className="justify-content-center text-center text-md-start">
            <Col xs={10}>
              <h1>Key Contacts</h1>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Madeel Abdullah",
                  designation: "Sadr MKA USA",
                  image: "sadr_mkausa.jpeg",
                }}
              />
            </Col>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Hibbi Iqbal",
                  designation: "Nazim e Ala",
                  image: "nazim-e-ala.jpg",
                  phone: "(703) 655-5052",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Najeeb Chaudhry",
                  designation: "Ijtema Secretary",
                  image: "ijtema-secretary.jpg",
                  phone: "(443) 889-0899",
                }}
              />
            </Col>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Waleed Sial",
                  designation: "Naib Nazim e Ala - Atfal",
                  image: "placeholder.jpeg",
                  phone: "(614) 804-4148",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Kasid Naeem",
                  designation: "Naib Nazim e Ala - Daftar",
                  image: "placeholder.jpeg",
                }}
              />
            </Col>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Ali Chaudhry",
                  designation: "Naib Nazim e Ala - Guest Services",
                  image: "placeholder.jpeg",
                  phone: "(240) 997-6262",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Ansar Malik",
                  designation: "Naib Nazim e Ala - Logistics",
                  image: "placeholder.jpeg",
                  phone: "(240) 491-7750",
                }}
              />
            </Col>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Nouman Ahmad",
                  designation: "Naib Nazim e Ala - Ziafat",
                  image: "placeholder.jpeg",
                  phone: "(215) 200-7750",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Ibrahim Chaudhry",
                  designation: "Naib Nazim e Ala - Ijtema Gah",
                  image: "naib-nazim-e-ala-ijtema-gah.jpg",
                  phone: "(571) 278-3243",
                }}
              />
            </Col>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Faheem Pal",
                  designation: "Naib Nazim e Ala - A/V",
                  image: "placeholder.jpeg",
                  phone: "(571) 288-6509",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Aji Tariq",
                  designation: "Naib Nazim e Ala - Saftey & Security",
                  image: "naib-nazim-e-ala-saftey-security.jpg",
                  phone: "(410) 530-1711",
                }}
              />
            </Col>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Rashid Waraich",
                  designation: "Naib Nazim e Ala - Taleem",
                  image: "placeholder.jpeg",
                  phone: "(301) 580-1229",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Headshot
                details={{
                  name: "Yusuf Sharif",
                  designation: "Naib Nazim e Ala - Sports",
                  image: "placeholder.jpeg",
                }}
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
