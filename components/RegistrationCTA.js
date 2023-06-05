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
      <h2 className={styles.title}>
        Join your brothers... Attend the National Ijtema!
      </h2>
      <div className={styles.content + " py-2"}>
        <Link
          href="https://form.typeform.com/to/RIIZNR2Z"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="warning btn-lg">Register Now!</Button>
        </Link>
      </div>
    </div>
  );
}
