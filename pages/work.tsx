import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Construction from '../components/Construction/Construction'
import styles from './work.module.scss'

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Christy Presler - examples of past projects' />
      </Head>

      <section >
        <Construction />
      </section>
    </>
  )
}

export default Work
