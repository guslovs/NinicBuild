import photo1 from '../../assets/gips-radovi.jpg'
import photo2 from '../../assets/gips-radovi2.jpg'
import photo3 from '../../assets/gips-radovi3.jpg'
import photo4 from '../../assets/gips-radovi4.jpg'

import styles from './Section2.module.css' 

export default function Section2Projects() {
    return (
        <div className={styles.container}>
            <div className={styles}>
                <h1>Gipsarski radovi</h1>
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