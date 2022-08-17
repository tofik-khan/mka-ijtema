import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProgramShura() {
  return (
    <>
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h2>Friday August 19th 2022</h2>
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
                  <td>4:15 AM</td>
                  <td>Tahajjud</td>
                </tr>
                <tr>
                  <td>5:15 AM</td>
                  <td>Fajr Prayers</td>
                </tr>
                <tr>
                  <td>5:30 AM</td>
                  <td>Sleep Catch up + Getting Ready</td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <td>10:00 AM</td>
                  <td>Shura &amp; Ijtema Registration</td>
                </tr>
                <tr>
                  <td>11:00 AM</td>
                  <td>
                    <strong>Session 1</strong>
                    <ul>
                      <li>Tilawat</li>
                      <li>Pledge</li>
                      <li>Opening Address: Sadr Sahib</li>
                      <li>Implementation Report of Last Shura</li>
                      <li>Proposals on Agenda</li>
                      <li>Sub-Committee Formation</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>12:00 PM</td>
                  <td>Lunch &amp; Sub-Committee Meetings</td>
                </tr>
                <tr>
                  <td>1:15 PM</td>
                  <td>
                    Jummah Prayers
                    <br />
                    (First Azan is 1:00PM)
                  </td>
                </tr>
                <tr>
                  <td>2:00 PM</td>
                  <td>Sub-Committee Meetings Continue</td>
                </tr>
                <tr>
                  <td>4:00 PM</td>
                  <td>
                    <strong>Session 2</strong>
                    <ul>
                      <li>Tilawat</li>
                      <li>Sub-Committee Report # 1</li>
                      <li>Sub-Committee Report # 2</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>6:00 PM</td>
                  <td>Ijtema Opening Session</td>
                </tr>
                <tr>
                  <td>9:00 PM</td>
                  <td>Maghrib &amp; Isha Prayer</td>
                </tr>
                <tr>
                  <td>10:30 PM</td>
                  <td>
                    Sub-Committee Meetings Continue
                    <br /> (As necessary)
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Saturday August 20th 2022</h2>
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
                  <td>4:15 AM</td>
                  <td>Tahajjud</td>
                </tr>
                <tr>
                  <td>5:15 AM</td>
                  <td>Fajr Prayers</td>
                </tr>
                <tr>
                  <td>5:30 AM</td>
                  <td>
                    <strong>Session 3</strong>
                    <ul>
                      <li>Tilawat</li>
                      <li>Sub-Committee Report # 3</li>
                      <li>Sub-Committee Report # 4</li>
                      <li>Closing Address &amp; Dua</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>8:00 AM</td>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <td>9:00 AM</td>
                  <td>Ijtema Program Begins</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
