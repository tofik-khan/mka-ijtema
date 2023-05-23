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
                  <td>
                    Jumma Prayers
                    <br />
                    <em>Fallen Leaf </em>
                  </td>
                </tr>
                <tr>
                  <td>2:00 PM</td>
                  <td>
                    Opening Ceremony
                    <br />
                    <em>Fallen Leaf </em>
                  </td>
                </tr>
                <tr>
                  <td>3:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Tehrik-e-Jadid Session with Jeopardy
                        <br />
                        <em>Fallen Leaf </em>
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Group Orientation and Team Leads Introductions <br />
                        Team Activities
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
                        <br />
                        <em>Fallen Leaf </em>
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Today&apos;s Kids, Tomorrow&apos;s Leaders - Gameshow
                        <br />
                        <em>Inspiration Point </em>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>5:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Paid Activities on Site
                      </Col>
                      <Col>
                        <strong>Atfal:</strong>
                        <br />
                        Capture the Flag
                        <br />
                        <em>Inspiration Point </em>
                      </Col>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td>7:00 PM</td>
                  <td>
                    Dinner
                    <br />
                    <em>Inspiration Point </em>
                  </td>
                </tr>
                <tr>
                  <td>8:30 PM</td>
                  <td>
                    Maghrib &amp; Isha
                    <br />
                    <em>Fallen Leaf</em>
                  </td>
                </tr>
                <tr>
                  <td>9:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Fireside Chat
                        <br />
                        <em>Ampitheater</em>
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
                  <td>
                    End of Day 1 <br />
                    <strong>(Quiet Hours 10:30PM - 7:30AM)</strong>
                  </td>
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
                  <td>
                    Tahajjud
                    <br />
                    <em>Fallen Leaf</em>
                  </td>
                </tr>
                <tr>
                  <td>4:20 AM</td>
                  <td>
                    Fajr Prayers
                    <br />
                    <em>Fallen Leaf</em>
                  </td>
                </tr>
                <tr>
                  <td>5:00 AM</td>
                  <td>Fajr Fit Hike - Great for all ages</td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>
                    Breakfast
                    <br />
                    <em>Inspiration Point</em>
                  </td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>
                    Sports Competitions
                    <ul style={{ maxWidth: "200px", margin: "auto" }}>
                      <li>Tug-of-War</li>
                      <li>Kabaddi</li>
                      <li>Strongman</li>
                      <li>Arm Wrestling</li>
                      <li>VolleyBall</li>
                      <li>Cricket</li>
                    </ul>
                    &amp; Paid Activities on site <br />
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
                  <td>
                    Lunch
                    <br />
                    <em>Inspiration Point</em>
                  </td>
                </tr>
                <tr>
                  <td>1:30 PM</td>
                  <td>
                    Zuhr &amp; Asr
                    <br />
                    <em>Fallen Leaf</em>
                  </td>
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
                        Taleem Competitions start
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
                    <br />
                    <em>Inspiration Point</em>
                  </td>
                </tr>
                <tr>
                  <td>6:15 PM</td>
                  <td>
                    Group Picture
                    <br />
                    Atfal Group Picture
                  </td>
                </tr>
                <tr>
                  <td>7:00 PM</td>
                  <td>
                    Dinner
                    <br />
                    <em>Inspiration Point</em>
                  </td>
                </tr>
                <tr>
                  <td>8:30 PM</td>
                  <td>
                    Maghrib &amp; Isha
                    <br />
                    <em>Fallen Leaf</em>
                  </td>
                </tr>
                <tr>
                  <td>9:00 PM</td>
                  <td>
                    <Row>
                      <Col>
                        <strong>Khuddam:</strong>
                        <br />
                        Fireside Chat
                        <br />
                        <em>Ampitheater</em>
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
                  <td>
                    End of Day 2 <br />
                    <strong>(Quiet Hours 10:30PM - 7:30AM)</strong>
                  </td>
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
                  <td>
                    Tahajjud
                    <br />
                    <em>Fallen Leaf</em>
                  </td>
                </tr>
                <tr>
                  <td>4:20 AM</td>
                  <td>
                    Fajr Prayers
                    <br />
                    <em>Fallen Leaf</em>
                  </td>
                </tr>
                <tr>
                  <td>5:00 AM</td>
                  <td>Fajr Fit Hike - Great for all ages</td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>
                    Breakfast
                    <br />
                    <em>Inspiration Point</em>
                  </td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>
                    Closing Ceremony
                    <br />
                    Prize Distribution
                    <br />
                    <strong>Misali Khadim Award</strong> - Given to Khadim with
                    most participation &amp; wins in Taleem Competitions
                  </td>
                </tr>
                <tr>
                  <td>10:00 AM</td>
                  <td>
                    Site &amp; Cabins Cleanup <br />
                    <Link
                      href="https://zephyrpoint.org/wp-content/uploads/2020/02/Check-Out-Procedures.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Checkout &amp; Cleaning Guide
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>11:00 AM</td>
                  <td>Checkout</td>
                </tr>
                <tr>
                  <td>1:30 PM</td>
                  <td>
                    Zuhr &amp; Asr
                    <br />
                    <em>Outdoors</em>
                  </td>
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
