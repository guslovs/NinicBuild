import photo from '../../assets/tesarski-radovi.jpg'
import styles from './Section2.module.css'

export default function Section4Services() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <h1>Tesarski radovi</h1>
                <p>Vršimo tesarske radove sa fokusom na preciznu izradu drvenih konstrukcija, krovišta i ostalih elemenata, uz pouzdanu i kvalitetnu izvedbu.</p>
            </div>
            <div className={styles.rightDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}
