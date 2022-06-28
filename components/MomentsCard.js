import React from "react";
import * as styles from "../styles/MomentsCard.module.css";

export default function MomentsCard({ content }) {
  return (
    <a href={content.album} target="_blank" rel="noreferrer">
      <div
        className={styles.image + " justify-content-center align-items-center"}
        style={{ backgroundImage: `url('past-ijtema/${content.image}')` }}
      >
        <h3 className={styles.imageText}>{content.title}</h3>
      </div>
    </a>
  );
}
