import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function HuzoorHero() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center text-md-start align-items-center">
        <Col md={4} className="py-3 py-md-0">
          <Image src="/piyary-huzoor.jpeg" width={300} height={400} />
        </Col>
        <Col>
          <h2 className="text-center">
            Message from Beloved Huzoor (a.b.a) for MKA National Ijtema
          </h2>
          <p className="text-start">
            &ldquo;Dear members of Majlis Khuddamul Ahmadiyya USA,
          </p>
          <p className="text-center">
            السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ
          </p>
          <p className="text-start">
            Your Sadr Sahib had requested me to send you a message for your
            Annual National Ijtima. My message for you on this blessed occasion
            is that Allah Ta`ala has revived for us the true teachings of Islam
            through the advent of the Promised Messiah (as). At many places, the
            Promised Messiah (as) has elaborated that the underlying and primary
            purpose of his coming is to inculcate in man a sincere devotion, so
            that he may strive to his utmost to fulfil the rights of Allah and
            the rights towards His creation...&rdquo;
          </p>
          <div className="py-3 text-center">
            <Link href="/message-from-huzoor">
              <Button variant="warning btn-lg">Read Full Message</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
