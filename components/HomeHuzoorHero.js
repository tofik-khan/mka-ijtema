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
            "It should be kept in mind that unless we truly reform ourselves,
            this purpose will be difficult for us to achieve. Therefore, it is
            of utmost importance that we better and refine our personal lives,
            by following the teachings of Holy Quran, being devoted and sincere
            in our worship and prayers to Allah and by scrupulously adhering to
            the tenets of our faith. If we are able to fulfil these
            responsibilities, only then would we be able to benefit from being
            an Ahmadi Khadim or an Ahmadi youngster. Otherwise, there would be
            no difference between us and any other person."
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
