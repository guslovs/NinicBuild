import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.jpg";
import ScrollToTop from "../../ScrollToTop";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className={styles.logoImg} />
            </Link>
          </div>

          <div className={`${styles.links} ${open ? styles.active : ""}`}>
            <Link to="/about">O nama</Link>
            <Link to="/services">Usluge</Link>
            <Link to="/projects">Projekti</Link>
            <Link to="/contact">Kontaktiraj nas</Link>
          </div>

          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
