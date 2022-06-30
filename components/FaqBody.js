import React from "react";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FaqBody() {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2 className="text-center py-2">Arrival &amp; Accommodations</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-italic pt-3">
            When should I arrive at the Ijtema?
          </h3>
          <p>
            The Ijtema officially begins on August 19<sup>th</sup> with the
            Jummah Prayers. The Jummah Prayer will begin at 1:00pm However, to
            allow ample time to settle in and prepare the Ijtema Administration
            team is asking everyone to arrive before 11:00am
          </p>
          <p className="text-dark text-italic">
            * Please note that if you are part of the MKA Shura, the Shura
            starts at 11:00 am so plan to arrive well in advance of that.
          </p>
          <h3 className="text-italic pt-3">What airports can I arrive at?</h3>
          <p>
            BWI Airport is the closest airport to the Baitur Rahman Mosque. The
            distance from BWI airport to BRM is around 26 miles by car. Members
            of the transport team will be present at BWI airport only for your
            assistance. Transport from IAD and DCA will also be available. For
            any further information please contact to Ansar Malik Sahib (240-
            491-7750).
          </p>
          <h3 className="text-italic pt-3">Where will I be staying?</h3>
          <p>
            Atfal will be accommodated inside the Mosque while Khuddam will be
            outside in the air conditioned sleeping marquee. Please bring your
            sleeping bags and other necessary items for night stay.{" "}
          </p>
          <h3 className="text-italic pt-3">Where can I park my car?</h3>
          <p>
            The Main Car Parking for Ijtema is outside of the Baitur Rahman
            Mosque. No car parking will be allowed inside the mosque.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center py-2">Registration &amp; Check-in</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-italic pt-3">
            Where can I register for the Ijtema?
          </h3>
          <p>
            Ijtema registration can be done by filling out the{" "}
            <a
              href="https://mkausa.wufoo.com/forms/2022-national-khuddam-atfal-ijtema-registration/"
              target="_blank"
              rel="noreferrer"
            >
              Ijtema Registration Form
            </a>
          </p>
          <p className="text-dark text-italic">
            * Note: flight information is required if you&apos;re flying to the
            Ijtema. Please purchase your tickets before starting the
            registration form.
          </p>
          <h3 className="text-italic pt-3">
            What do I need to enter the Bait-ur-Rehman Mosque?
          </h3>
          <p>
            Entry to the Baitur Rahman Mosque will be strictly with Jama’at
            registration ID cards. Khudam & Atfal are requested to carry their
            member cards during Ijtema.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center py-2">Things to Bring</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-italic pt-3">What should I bring?</h3>
          <p>
            <ul>
              <li>Personal ID Card</li>
              <li>Jama’at Member ID Card</li>
              <li>Health Insurance Card</li>
              <li>Clothes for 2 or 3 nights stay (as per your requirement)</li>
              <li>Cap</li>
              <li>MKA Scarf (Optional)</li>
              <li>Toothbrush / Toothpaste</li>
              <li>Hair Brush or Comb</li>
              <li>Cell Phone & Charger</li>
              <li>Shaving Kit & Extra Razors (if needed)</li>
            </ul>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center py-2">Ijtema Admin & Contacts</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-italic pt-3">
            Who can I contact for questions and comments?
          </h3>
          <p>
            You can find the Ijtema Admin Team contact information on the{" "}
            <Link href="/contact">Contacts</Link> page.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
