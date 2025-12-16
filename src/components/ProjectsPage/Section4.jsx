import photo1 from '../../assets/tesarski-radovi.jpg'
import photo2 from '../../assets/tesarski-radovi2.jpg'

import styles from './Section2.module.css' 

export default function Section4Projects() {
    return (
        <div className={styles.container}>
            <div className={styles}>
                <h1>Tesarski radovi</h1>
            </div>

            <div className={styles.imgGrid}>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
            </div>
        </div>
    )
}