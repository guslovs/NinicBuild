import photo from '../../assets/plans.jpeg'
import styles from './Section2.module.css'

export default function Section2() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <h1>Naš Pristup</h1>
                <p>Svaki projekat radimo pažljivo i odgovorno, uz jasan plan i jednostavan proces koji klijentima daje sigurnost od početka do kraja.</p>
            </div>
            <div className={styles.rightDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}