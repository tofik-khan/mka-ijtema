import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "../styles/InfoContainer.module.css";

export default function InfoContainer() {
  return (
    <div className="infoContainer my-3">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} xl={6}>
            <Card>
              <Card.Header
                as="h2"
                className={styles.infoContainerTitle + " text-center"}
              >
                Information
              </Card.Header>
              <Card.Body>
                <Card.Title
                  as="h3"
                  className={styles.infoContainerLabel + " mx-5"}
                >
                  Theme
                </Card.Title>
                <Card.Text>
                  <blockquote
                    className={styles.infoContainerTextItalic + " text-center"}
                  >
                    Living Connection with Allah
                  </blockquote>
                </Card.Text>
                <Card.Title
                  as="h3"
                  className={styles.infoContainerLabel + " mx-5"}
                >
                  Dates
                </Card.Title>
                <Card.Text>
                  <blockquote
                    className={styles.infoContainerTextRegular + " text-center"}
                  >
                    August 19<sup>th</sup> - 21<sup>st</sup> 2022
                  </blockquote>
                </Card.Text>
                <Card.Title
                  as="h3"
                  className={styles.infoContainerLabel + " mx-5"}
                >
                  Venue
                </Card.Title>
                <Card.Text>
                  <blockquote
                    className={styles.infoContainerTextRegular + " text-center"}
                  >
                    Masjid Bait-ur-Rehman Mosque, MD
                  </blockquote>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
  return (
    <div className="infoContainer my-3">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Information</h2>
            <h3>Theme</h3>
            <div>Living Connection with Allah</div>
            <h3>Dates</h3>
            <div>August 19-21 2022</div>
            <h3>Venue</h3>
            <div>Masjid Bait-ur-Rehman, MD</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
