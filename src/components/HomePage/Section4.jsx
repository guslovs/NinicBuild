import photo from '../../assets/team.png'
import styles from './Section2.module.css'
import { Link } from 'react-router-dom'

export default function Section4() {
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <h1>Naša Posvećenost Razvoju</h1>
                <p>Stalno unapređujemo svoje veštine i način rada kako bismo pružili još bolju uslugu, a više o tome možete pronaći u sekciji <Link to="/about">‘O nama’</Link>.</p>
            </div>
            <div className={styles.rightDiv}>
                <img src={photo} alt="Plans" />
            </div>
        </div>
    )
}