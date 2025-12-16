import styles from './Section2.module.css'
import photo from '../../assets/team2.jpg'

export default function Section2AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.rightDiv}>
                <h1>Naša Priča</h1>
                <p>Počeli smo sa jasnom vizijom da gradimo projekte koji traju i ostavljaju pozitivan utisak, a tokom godina smo razvili tim stručnjaka koji deli iste vrednosti i posvećenost detaljima, što nas razlikuje u industriji.</p>
            </div>
            <div className={styles.leftDiv}>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}