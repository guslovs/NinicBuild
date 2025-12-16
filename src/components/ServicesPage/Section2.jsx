import photo from '../../assets/gips-radovi.jpg'
import styles from './Section2.module.css'

export default function Section2Services() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <h1>Gipsarski radovi</h1>
                <p>Izvodimo kvalitetne gipsarske radove, uključujući spuštene plafone i dekorativne elemente, uz preciznu završnu obradu i moderan dizajn.</p>
            </div>
            <div className={styles.rightDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}