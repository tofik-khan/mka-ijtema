import styles from "../styles/RegistrationCTA.module.css";

export default function RegistrationCTA() {
  return (
    <div className={styles.registrionCtaContainer + " text-center py-5"}>
      <h2 className={styles.title}>Registration</h2>
      <div className={styles.content + " py-2"}>Coming Soon!</div>
    </div>
  );
}
