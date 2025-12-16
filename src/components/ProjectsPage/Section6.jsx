import photo1 from '../../assets/zidarski-radovi.jpg'
import photo2 from '../../assets/zidarski-radovi2.jpg'
import photo3 from '../../assets/zidarski-radovi3.jpg'
import photo4 from '../../assets/zidarski-radovi4.jpg'

import styles from './Section2.module.css' 

export default function Section6Projects() {
    return (
        <div className={styles.container}>
            <div className={styles}>
                <h1>Zidarski radovi</h1>
            </div>

            <div className={styles.imgGrid}>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
            </div>
        </div>
    )
}