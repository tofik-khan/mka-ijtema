import styles from "../styles/RegistrationCTA.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function HomeRegistrationBlurb() {
  return (
    <div
      className={
        styles.registrionCtaContainer + " text-center py-5 my-5 text-bg-light"
      }
    >
      <h2 className={styles.title}>Online Registration Closed!</h2>
      <div className={styles.content + " py-3"}>
        <Link href="/program">
          <Button variant="warning btn-lg">More Info</Button>
        </Link>
      </div>
    </div>
  );
}
