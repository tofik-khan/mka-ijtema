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
      <h2 className={styles.title}>Check out what this Ijtema brings!</h2>
      <div className={styles.content + " py-2"}>
        <Link href="/program">
          <Button variant="outline-warning btn-lg">Ijtema Program</Button>
        </Link>
      </div>
    </div>
  );
}
