import photo from '../../assets/philosophy.jpg'
import styles from './Section3.module.css'

export default function Section3AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.rightDiv}>
                <img src={photo} alt="" />
            </div>
            <div className={styles.leftDiv}>
                <h1>Naša Filozofija</h1>
                <p>Vjerujemo da svaki projekat predstavlja priliku za učenje i napredak, zbog čega kontinuirano unapređujemo metode rada, pratimo nove tehnologije i pristupamo svakom zadatku sa otvorenim umom i željom za inovacijom.</p>
            </div>
        </div>
    )
}