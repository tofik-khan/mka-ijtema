import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "../styles/StatsTopPerformers.module.css";

export default function StatsTopPerformers({ data }) {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Current Leading Majalis</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="my-5 order-md-1 mt-md-3">
            <Card border="warning">
              <Card.Header className="text-center bg-dark">
                <h3 className={styles.positionFirst}>
                  1<sup>st</sup>
                </h3>
              </Card.Header>
              <Card.Body className="py-4 text-center">
                <h4 className={styles.majlisName}>{data[0][0]}</h4>
                <div className={styles.percentage}>
                  {parseInt(data[0][1]) + "%"}
                </div>
                <div className={styles.targetAchieved}>target achieved</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="my-5 order-md-first">
            <Card>
              <Card.Header className="text-center">
                <div className={styles.position}>
                  2<sup>nd</sup>
                </div>
              </Card.Header>
              <Card.Body className="py-4 text-center">
                <h4 className={styles.majlisName}>{data[1][0]}</h4>
                <div className={styles.percentage}>
                  {parseInt(data[1][1]) + "%"}
                </div>
                <div className={styles.targetAchieved}>target achieved</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="my-5 order-md-last">
            <Card>
              <Card.Header className="text-center">
                <div className={styles.position}>
                  3<sup>rd</sup>
                </div>
              </Card.Header>
              <Card.Body className="py-4 text-center">
                <h4 className={styles.majlisName}>{data[2][0]}</h4>
                <div className={styles.percentage}>
                  {parseInt(data[2][1]) + "%"}
                </div>
                <div className={styles.targetAchieved}>target achieved</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
