import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Construction from '../components/Construction/Construction'
import styles from './about.module.scss'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christy Presler - Senior Design Technologist</title>
        <meta name='description' content='Senior Design Technologist/UX Engineer with an insatiable curiosity about human behavior and a deep understanding of technology. I am a designer who implements engineering best practices and an engineer who delivers impeccable user experiences.' />
        {/* TODO: replace favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className={styles.about} />

      <main className={styles.main}>
        <section >
          <Construction />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About
