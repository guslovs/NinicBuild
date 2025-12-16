import photo from '../../assets/fasada-radovi.jpg'
import styles from './Section2.module.css'

export default function Section3Services() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <h1>Fasaderski radovi</h1>
                <p>Naši fasaderski radovi pružaju dugotrajnu zaštitu objekta uz pažljivo izvedenu izolaciju i završnu obradu.</p>
            </div>
            <div className={styles.rightDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}
