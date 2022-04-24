import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Construction from '../components/Construction/Construction'
import styles from './Work.module.scss'

const Work: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christy Presler - Senior Design Technologist</title>
        <meta name='description' content='Christy Presler - examples of past projects' />
        {/* TODO: replace favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className={styles.work} />

      <main className={styles.main}>
        <section >
          <Construction />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Work
