import logo from "../../assets/logo.jpg";
import styles from "./Footer.module.css";
import flag from '../../assets/flag.webp'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={logo} alt="Logo" />
        </div>

        <nav className={styles.center}>
          <Link to="/about">O nama</Link>
          <Link to="/services">Usluge</Link>
          <Link to="/projects">Projekti</Link>
          <Link to="/contact">Kontaktiraj nas</Link>
        </nav>

        <div className={styles.right}>
          <p>Gradimo dom koji priča vašu priču.</p>
          <p><img style={{
            width: '30px',
            height: 'auto'
          }} src={flag} alt="" />, Beograd i okolina</p>
        </div>
      </div>
    </footer>
  );
}
