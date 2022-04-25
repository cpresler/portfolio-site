import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Construction from '../components/Construction/Construction'
import styles from './about.module.scss'

const About: NextPage = () => {
  return (
    <>
      <section >
        <Construction />
      </section>
    </>
  )
}

export default About
