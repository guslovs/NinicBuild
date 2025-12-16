import photo from '../../assets/handshake.jpg'
import styles from './Section3.module.css'

export default function Section3() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <img src={photo} alt="Worth" />
            </div>
            <div className={styles.rightDiv}>
                <h1>Naše Vrednosti</h1>
                <p>Verujemo u pouzdanost, kvalitetan rad i dobar odnos s klijentima, pa svaki zadatak radimo tako da ostavimo dugotrajan i pozitivan utisak.</p>
            </div>
        </div>
    )
}