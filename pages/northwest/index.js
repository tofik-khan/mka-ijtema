import React from "react";

import Header from "../../components/Header.js";
import Nav from "../../components/Nav.js";
import Footer from "../../components/Footer.js";

import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Image from "next/image.js";

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
`;

const Label = styled.span`
  text-transform: none;
  font-family: "Lato";
  font-size: 18px;
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
      </main>
      <Footer />
    </>
  );
}
