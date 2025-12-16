import photo from "../../assets/molerski-radovi.jpg";
import styles from "./Section2.module.css";

export default function Section7Services() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <h1>Molerski radovi</h1>
          <p>
            Naši molerski radovi daju vašim prostorima savršen izgled, precizno
            i sa pažnjom do svakog detalja.
          </p>
        </div>
        <div className={styles.rightDiv}>
          <img src={photo} alt="" />
        </div>
      </div>
      <div className={styles.container2}>
        <p>i još mnogo toga!</p>
      </div>
    </>
  );
}
