import photo from '../../assets/zidarski-radovi.jpg'
import styles from './Section2.module.css'

export default function Section6Services() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <h1>Zidarski radovi</h1>
                <p>Stručno izvodeći zidarske radove, gradimo čvrste i precizne konstrukcije koje traju decenijama.</p>
            </div>
            <div className={styles.rightDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}