import styles from "./Section1.module.css";
import video from "../../assets/video.mp4";

export default function Section1Projects() {
  return (
    <div className={styles.videoContainer}>
      <video src={video} autoPlay muted loop playsInline className={styles.bgVideo} />

      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Naši Projekti</h1>
        </div>
      </div>
    </div>
  );
}
