import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sportrehabilitácó</h1>
      </main>
      <iframe width="640" height="360" src="https://tv2play.hu/embed/exatlon/itt_az_igazsag_szarka_akos_elarulta_mi_volt_kozte_es_franci_kozott" allowfullscreen scrolling="no" frameborder="0"></iframe>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
