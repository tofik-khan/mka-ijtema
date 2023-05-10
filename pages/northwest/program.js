import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import { Container, Row, Col } from "react-bootstrap";

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
                  <td>1:00 PM</td>
                  <td>Arrival at Ijtema Site (Zephyr Point)</td>
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
                  <td>Motivational Session with Murabbi Sabahat Ali Sahib</td>
                </tr>
                <tr>
                  <td>4:00 PM</td>
                  <td>Registration and Cabin Checkin</td>
                </tr>
                <tr>
                  <td>7:00 PM</td>
                  <td>Dinner</td>
                </tr>
                <tr>
                  <td>8:30 PM</td>
                  <td>Maghrib &amp; Isha</td>
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
                  <td>Fajr Fit Hike</td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>Sports Competitions</td>
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
                  <td>Review Of Religions: Existence Project</td>
                </tr>
                <tr>
                  <td>3:00 PM</td>
                  <td>Taleem Competitions</td>
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
                  <td>Fireside Chat</td>
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
                  <td>Fajr Fit Hike</td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>Closing Ceremony</td>
                </tr>
                <tr>
                  <td>10:00 AM</td>
                  <td>Site &amp; Cabins Cleanup</td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>Closing Ceremony</td>
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
