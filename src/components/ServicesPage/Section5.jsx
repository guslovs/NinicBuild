import photo from '../../assets/grubi-radovi2.jpg'
import styles from './Section2.module.css'

export default function Section5Services() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <h1>Gruba gradnja</h1>
                <p>Izvodimo sve vrste radova grube gradnje, od temelja do konstrukcije, garantujući čvrstu i sigurnu osnovu za svaki objekat.</p>
            </div>
            <div className={styles.rightDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}