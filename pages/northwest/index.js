import React from "react";

import Header from "../../components/Header.js";
import Nav from "../../components/Nav.js";
import Footer from "../../components/Footer.js";

import { Container, Row, Col, Button } from "react-bootstrap";

import styled from "styled-components";
import Image from "next/image.js";
import Link from "next/link.js";

import YoutubeEmbed from "../../components/YoutubeEmbed.js";

const HeroContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80") !important;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  min-height: 80vh;

  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: "Noto Serif";
  font-size: 72px;

  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`;

const H2 = styled.h2`
  font-family: "Noto Serif";
  font-size: 36px;
`;

const H3 = styled.h3`
  font-family: "Lato";
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline #f6bc56 2px;
`;

const Label = styled.span`
  text-transform: none;
  font-family: "Lato";
  font-size: 18px;
`;

const ItalicText = styled.p`
  font-size: 28px;
  font-style: italic;
  font-family: serif;
`;

const InfoButtonWrapper = styled.div`
  font-size: 28px;
  font-style: italic;
  font-family: serif;
`;

export default function Page() {
  return (
    <>
      <Header
        data={{
          title: "Northwest Regional Ijtema 2023",
          description: "Northwest Regional Ijtema 2023 info center",
        }}
      />
      <Nav />
      <main className="mainContent">
        <HeroContainer>
          <Container>
            <Row className="text-center text-md-left">
              <Col sm={12} md={6}>
                <Image src="/Ijtema-logo.png" width={300} height={300} />
              </Col>
              <Col sm={12} md={6}>
                <H1>
                  <Label>MKA Northwest</Label>
                  <br />
                  Regional
                  <br />
                  Ijtema
                  <br />
                  2023
                </H1>
              </Col>
            </Row>
          </Container>
        </HeroContainer>
        <div className="my-5">
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={4} className="my-3">
                <H3>Location</H3>
                <ItalicText>Zypher Point, Lake Tahoe</ItalicText>
              </Col>
              <Col md={4} className="my-3">
                <H3>Dates</H3>
                <ItalicText>May 26 - 28</ItalicText>
              </Col>
              <Col md={4} className="my-3">
                <H3>Theme</H3>
                <ItalicText>Holy Quran - Our Guiding Light</ItalicText>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-center py-5 text-bg-dark">
          <H2>Be a part of our Regional Ijtema</H2>
          <InfoButtonWrapper className="py-2">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfjMV9z-JzkNRmm-9juiIvxbz5ivuGqe8UHoyaWCcLcSLM18A/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline-warning btn-lg">Register Now!</Button>
            </Link>{" "}
            <Link href="/northwest/program" target="_blank" rel="noreferrer">
              <Button variant="outline-light btn-lg">Register Now!</Button>
            </Link>
          </InfoButtonWrapper>
        </div>
        <div className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h2>Join your brothers...</h2>
                ...For a weekend of spiritually and physically refreshing
                activities.
              </Col>
              <Col md={6}>
                <Image src={"/nw-ijtema/flyer.jpeg"} width={400} height={500} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="py-5" style={{ backgroundColor: "#EEEEEE" }}>
          <Container>
            <Row className="align-items-center">
              <Col md={4}>
                <Image
                  src={"/nw-ijtema/ijtema-guest-invite.jpeg"}
                  width={400}
                  height={400}
                />
              </Col>
              <Col md={4}>
                <Image
                  src={"/nw-ijtema/existence-project.jpeg"}
                  width={400}
                  height={400}
                />
              </Col>
              <Col xs={{ order: "first" }} md={4} className="py-2">
                <H2 className="text-center pb-3">Ijtema Promo!</H2>
                <YoutubeEmbed embedId="B6JWlckiHWc" width={400} height={400} />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
