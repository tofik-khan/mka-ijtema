import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/InfoContainer.module.css";

export default function InfoContainer() {
  return (
    <div className="infoContainer my-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col sm={12} md={4} className="my-3">
            <h3 className={styles.infoContainerLabel}>Theme</h3>
            <div className={styles.infoContainerTextItalic}>
              Living Connection with Allah
            </div>
          </Col>
          <Col sm={12} md={4} className="my-3">
            <h3 className={styles.infoContainerLabel}>Dates</h3>
            <div className={styles.infoContainerTextItalic}>Aug 19-21 2022</div>
          </Col>
          <Col sm={12} md={4} className="my-3">
            <h3 className={styles.infoContainerLabel}>Venue</h3>
            <div className={styles.infoContainerTextItalic}>
              Bait-ur-Rehman Mosque, MD
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
