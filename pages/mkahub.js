import React from "react";
import Header from "../components/Header.js";
import Nav from "../components/Nav.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

import Footer from "../components/Footer.js";

export default function MkaHub() {
  return (
    <>
      <Header
        data={{
          title: "MKAHUB - Ijtema 2022",
          description: "",
        }}
      />
      <Nav />
      <main className="mainContent">
        <Container className="py-5">
          <Row>
            <Col>
              <h1>MKA HUB</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              The MKA Hub is the premiere spot for all Khuddam to come relax,
              have fun, and the pace to meet your fellow brothers after a long
              break.
              <br />
              <br />
              Come by to the MKA Café to purchase a gourmet latte and a slice of
              cake, or make a stop at our 24 hour convenience store to get all
              you snacking needs. Walk through our interactive khilafat
              exhibition. Or if you just want to relax with some friends, invite
              them to a friendly foosball competition or game of pool. Test your
              strength at the MKA Fit station or see how long you can hang on at
              our exclusive mechanical bull. There so much happening, you don't
              want to miss it!
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <h2>What&apos;s in store:</h2>
          <Row>
            <Col md={6}>
              <Row className="mx-md-5 mx-0">
                <Col md={6}>
                  <ul>
                    <li>Pool</li>
                    <li>Foosball</li>
                    <li>Airhockey</li>
                    <li>Billards</li>
                    <li>Minihoop</li>
                    <li>Darts</li>
                    <li>Gaming station</li>
                    <li>Board Games</li>
                    <li>MKA Fit</li>
                    <li>ROR/Tabligh Escape Room</li>
                    <li>Mechanical Bull</li>
                    <li>MTA booth</li>
                    <li>Exhibition</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col>
              <Image src="/mkahub.jpg" width={300} height={400} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h2>Main Events</h2>
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col md={8}>
              <h3>Friday August 19th</h3>
              <table className="table table-hover text-center">
                <thead>
                  <tr>
                    <th className="col-sm-3 col-md-2">Time</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>9:00 AM</td>
                    <td>MKA Hub Opens</td>
                  </tr>
                  <tr>
                    <td>1:15 PM</td>
                    <td>Jummah Prayers (Hub Closed)</td>
                  </tr>
                  <tr>
                    <td>6:00 PM</td>
                    <td>Ijtema Opening Session (Hub Closed)</td>
                  </tr>
                  <tr>
                    <td>8:00 PM</td>
                    <td>Waqfeen e Zindagi Presentation</td>
                  </tr>
                  <tr>
                    <td>10:30 PM</td>
                    <td>Urdu Mushaira with Kashmiri Chai</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col md={8}>
              <h3>Saturday August 20th</h3>
              <table className="table table-hover text-center">
                <thead>
                  <tr>
                    <th className="col-sm-3 col-md-2">Time</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>9:00 AM</td>
                    <td>
                      Review of Religion / Tabligh <br /> Escape Room
                    </td>
                  </tr>
                  <tr>
                    <td>10:00 AM</td>
                    <td>
                      Car Safety Presentation with Sadr Khuddamul Ahmadiyya USA
                    </td>
                  </tr>
                  <tr>
                    <td>3:00 PM</td>
                    <td>
                      <ul>
                        <li>English Poem Competition</li>
                        <li>Mechanical Bull</li>
                        <li>
                          Review of Religion / Tabligh <br /> Escape Room
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>4:00 PM</td>
                    <td>MKA Photography</td>
                  </tr>
                  <tr>
                    <td>5:30 PM</td>
                    <td>
                      Air Soft and Archery Competition:
                      <br /> Jamaat Amila vs Khuddam Amila
                    </td>
                  </tr>
                  <tr>
                    <td>6:30 PM</td>
                    <td>Kabaddi Exhibition Match</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
