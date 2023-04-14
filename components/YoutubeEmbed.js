import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedId, width, height }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width={width || "853"}
      height={height || "480"}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;