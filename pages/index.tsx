import type { NextPage } from 'next'
import Image from 'next/image'
import ToolIcon from '../components/Icons/ToolIcon/ToolIcon'
import Text from '../components/Text/Text'
import Construction from '../components/Construction/Construction'
import styles from './Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <Image className={styles.hero_image} src={'/images/christy-sm-sq.jpg'} width={240} height={240} layout='responsive' sizes='60vw' priority={true} alt='Headshot portrait of Christy Presler'/>
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
        <Construction />
      </section>
    </>
  )
}

export default Home
