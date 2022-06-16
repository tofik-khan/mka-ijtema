import styles from "../styles/RegistrationCTA.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/Link";

export default function RegistrationCTA() {
  return (
    <div
      className={
        styles.registrionCtaContainer + " text-center py-5 text-bg-dark"
      }
    >
      <h2 className={styles.title}>Join your brothers!</h2>
      <div className={styles.content + " py-2"}>
        <Link href="/register">
          <Button variant="outline-warning btn-lg">Register Now</Button>
        </Link>
      </div>
    </div>
  );
}
