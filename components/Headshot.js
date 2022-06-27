import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import * as styles from "../styles/Headshot.module.css";

export default function Headshot({ details }) {
  const phone =
    details.phone !== null ? (
      <a
        className="text-decoration-none text-dark"
        href={`tel:${details.phone}`}
      >
        {details.phone}
      </a>
    ) : (
      ""
    );
  return (
    <Row className="justify-content-center align-items-center py-3 text-center text-md-start">
      <Col xs={8} sm={6} md={4}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url('headshots/${details.image}')` }}
        ></div>
      </Col>
      <Col xs={12} md={8} className="mt-4 mt-md-0">
        <h2 className={styles.designation}>{details.designation}</h2>
        <h3 className={styles.name}>{details.name}</h3>
        {phone}
        <div>{details.email}</div>
      </Col>
    </Row>
  );
}
