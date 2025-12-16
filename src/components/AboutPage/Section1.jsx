import styles from './Section1.module.css'

export default function Section1AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h1>BUILD NINIĆ</h1>
      </div>
      <div className={styles.rightDiv}>
        <p>Naša kompanija već dugi niz godina pruža pouzdane i kvalitetne građevinske usluge, spajajući dugogodišnje iskustvo i stručnost sa savremenim metodama rada, uz pažljivo planiranje i preciznu realizaciju, kako bi svaki projekat bio izveden profesionalno, efikasno i u skladu sa najvišim standardima. Nastanjeni u Srbiji, naše građevinske usluge vršimo u Beogradu i okolini.</p>
      </div>
    </div>
  );
}
