import styles from "../styles/RegistrationCTA.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function RegistrationCTA() {
  return (
    <div
      className={
        styles.registrionCtaContainer + " text-center py-5 text-bg-dark"
      }
    >
      <h2 className={styles.title}>Join your brothers!</h2>
      <div className={styles.content + " py-2"}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mkausa.wufoo.com/forms/2022-national-khuddam-atfal-ijtema-registration/"
        >
          <Button variant="outline-warning btn-lg">Register Now</Button>
        </a>
      </div>
    </div>
  );
}
