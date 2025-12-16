import styles from './Section1.module.css'

export default function Section1Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h1>Kontaktirajte nas</h1>
      </div>
      <div className={styles.rightDiv}>
        <p>Imate ideju, pitanje ili plan za gradnju? Slobodno nas kontaktirajte i rado ćemo vam pomoći savetom i ponudom.</p>
      </div>
    </div>
  );
}