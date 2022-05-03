import classNames from "classnames"
import styles from './AppLayout.module.scss'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useRouter } from 'next/router'


interface Props {
  children: ReactNode
  className?: string
}

const AppLayout = ({ children, className }: Props) => {
  const router = useRouter()
  const dark = router.pathname === '/'
  

  const classes = classNames(className, {
    [styles.container]: true,
  })


  return (
    <div className={classes}>
      <Head>
        <title>Christy Presler - Senior Design Technologist</title>
        <meta name='description' content='Senior Design Technologist/UX Engineer with an insatiable curiosity about human behavior and a deep understanding of technology. I am a designer who implements engineering best practices and an engineer who delivers impeccable user experiences.' />
        {/* TODO: replace favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header dark={dark}/>

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout