import styles from "../styles/ImageHighlight.module.css";

export default function ImageHighlight() {
  return (
    <>
      <h2 className={styles.title + " text-center pt-5"}>
        Living Connection with Allah
      </h2>
      <div className={styles.container}>
        <div className={styles.imageContainer}></div>
        <div className={styles.textContainer + " bg-light"}>
          Some Quote or excrept about Living Connection with Allah or Ijtema in
          general
        </div>
      </div>
    </>
  );
}
