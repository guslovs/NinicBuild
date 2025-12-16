import styles from './Section2.module.css'

export default function Section2Contact() {
    return (
        <div className={styles.container}>
            <h1>Telefon: +381 64 5417155</h1>
            <h1>Instagram: <a href="https://www.instagram.com/ninic_build?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@ninic_build</a></h1>
            <h1>Email: ninic.build@gmail.com</h1>
            <h1>Lokacija: Vranić(Somborska 5), Srbija</h1>
            <h1>Radno vreme: Ponedeljak-Subota, 8:00-17:00</h1>
        </div>
    )
}