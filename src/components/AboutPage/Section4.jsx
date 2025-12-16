import styles from './Section2.module.css'
import photo from '../../assets/vision2.jpg'

export default function Section4AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.rightDiv}>
                <h1>Naša Vizija</h1>
                <p>Cilj nam je ne samo isporučiti visokokvalitetne građevinske objekte, već i stvarati dugoročne vrednosti za naše klijente i zajednicu, gradeći poverenje kroz transparentnost, odgovornost i rezultate koji nadmašuju očekivanja.</p>
            </div>
            <div className={styles.leftDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}