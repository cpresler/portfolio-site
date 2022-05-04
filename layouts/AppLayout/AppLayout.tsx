import classNames from "classnames"
import styles from './AppLayout.module.scss'
import MetaData from '../../components/MetaData/MetaData'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useRouter } from 'next/router'


interface Props {
  children: React.ReactNode
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
      <MetaData />

      <Header dark={dark}/>

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout