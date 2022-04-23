import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import ToolIcon from '../components/Icons/ToolIcon/ToolIcon'
import Text from '../components/Text/Text'
import styles from './Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christy Presler - Senior Design Technologist</title>
        <meta name='description' content='Senior Design Technologist/UX Engineer with an insatiable curiosity about human behavior and a deep understanding of technology. I am a designer who implements engineering best practices and an engineer who delivers impeccable user experiences.' />
        {/* TODO: replace favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header className={styles.home} dark={true}/>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero_content}>
            <Image className={styles.hero_image} src={'/images/christy-sm-sq.jpg'} width={240} height={240} layout='responsive' sizes='60vw' alt='Headshot portrait of Christy Presler'/>
            <div className={styles.hero_text}>
              <Text tag='h1'>
                Hello! My name is Christy Presler.
              </Text>
              <Text size='l'>
                I am a designer who implements engineering best practices and an engineer who delivers impeccable user experiences.
              </Text>
            </div>
          </div>
        </section>
        
        <section className={styles.work}>
          <div className={styles.work_content}>
            <Text tag='h3' className={styles.work_title}>
              Under Construction
            </Text>
            <div className={styles.work_construction}>
              <ToolIcon size={40} className={styles.work_icon}/>
            </div>
          </div>

        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
