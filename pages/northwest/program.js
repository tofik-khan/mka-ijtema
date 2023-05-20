import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header data={{ title: "NW Regional Ijtema | Program" }} />
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h2>Friday May 26th 2023</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th className="col-sm-3 col-md-2">Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12:00 PM</td>
                  <td>
                    Arrival at Ijtema Site (Zephyr Point)
                    <br />
                    Lunch
                  </td>
                </tr>
                <tr>
                  <td>1:30 PM</td>
                  <td>Jumma Prayers</td>
                </tr>
                <tr>
                  <td>2:00 PM</td>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <td>3:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Tehrik-e-Jadid Session with Jeopardy
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Today&apos;s Kids, Tomorrow&apos;s Leaders - Gameshow
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>4:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Registration &amp; Cabin Checkin
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Atfal Group Orientation &amp; Team Introductions
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>7:00 PM</td>
                  <td>Dinner</td>
                </tr>
                <tr>
                  <td>8:30 PM</td>
                  <td>Maghrib &amp; Isha</td>
                </tr>
                <tr>
                  <td>9:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Fireside Chat
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Lights out
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>10:30 PM</td>
                  <td>End of Day 1</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h2>Saturday May 27th 2023</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th className="col-sm-3 col-md-2">Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3:30 AM</td>
                  <td>Tahajjud</td>
                </tr>
                <tr>
                  <td>4:20 AM</td>
                  <td>Fajr Prayers</td>
                </tr>
                <tr>
                  <td>5:00 AM</td>
                  <td>Fajr Fit Hike - Great for all ages</td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>
                    Sports Competitions &amp; Paid Activities on site <br />
                    <Link
                      href="https://zephyrpoint.org/activities/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn about Activites at the site
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>12:00 PM</td>
                  <td>Lunch</td>
                </tr>
                <tr>
                  <td>1:30 PM</td>
                  <td>Zuhr &amp; Asr</td>
                </tr>
                <tr>
                  <td>2:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        <strong>The Existence Project:</strong>
                        <br />
                        The Holy Qur&apos;an - Our Window Into Existence
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Scavenger Hunt - Exploring God&apos;s Creation
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>3:00 PM</td>
                  <td>Taleem Competitions</td>
                </tr>
                <tr>
                  <td>5:00 PM</td>
                  <td>
                    <strong>
                      Khilafat Day Program with Respected Ameer Sahib USA (via
                      Zoom)
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>6:15 PM</td>
                  <td>Taleem Competitions - Cont.</td>
                </tr>
                <tr>
                  <td>7:00 PM</td>
                  <td>Dinner</td>
                </tr>
                <tr>
                  <td>8:30 PM</td>
                  <td>Maghrib &amp; Isha</td>
                </tr>
                <tr>
                  <td>9:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Fireside Chat
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Lights out
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>10:30 PM</td>
                  <td>End of Day 2</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h2>Sunday May 28th 2023</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th className="col-sm-3 col-md-2">Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3:30 AM</td>
                  <td>Tahajjud</td>
                </tr>
                <tr>
                  <td>4:20 AM</td>
                  <td>Fajr Prayers</td>
                </tr>
                <tr>
                  <td>5:00 AM</td>
                  <td>Fajr Fit Hike - Great for all ages</td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>
                    Closing Ceremony
                    <br />
                    Prize Distribution
                    <br />
                    Misali Khadim Award - Given to Khadim with most
                    participation in Taleem Competitions
                  </td>
                </tr>
                <tr>
                  <td>10:00 AM</td>
                  <td>Site &amp; Cabins Cleanup</td>
                </tr>
                <tr>
                  <td>11:00 AM</td>
                  <td>Checkout</td>
                </tr>
                <tr>
                  <td>1:30 PM</td>
                  <td>Zuhr &amp; Asr</td>
                </tr>
                <tr>
                  <td>2:00 PM</td>
                  <td>Boxed Lunches and Departure</td>
                </tr>
              </tbody>
            </table>
            * The program, activities and times are subject to change
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
