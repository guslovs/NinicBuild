import photo1 from '../../assets/fasada-radovi.jpg'
import photo2 from '../../assets/fasada-radovi2.jpg'
import photo3 from '../../assets/fasada-radovi3.jpg'

import styles from './Section2.module.css' 

export default function Section3Projects() {
    return (
        <div className={styles.container}>
            <div className={styles}>
                <h1>Fasadni radovi</h1>
            </div>

            <div className={styles.imgGrid}>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
            </div>
        </div>
    )
}