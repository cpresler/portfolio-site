import classNames from 'classnames'
import styles from './Footer.module.scss'
import Link, { ExternalLink } from '../Link/Link'
import LinkedInIcon from '../Icons/LinkedInIcon/LinkedInIcon'
import GithubIcon from '../Icons/GithubIcon/GithubIcon'
import Text from '../Text/Text'

interface Props {
  className?: string
  dark?: boolean
}

const Footer = ({ className, dark = false }: Props) => {
  const classes = classNames(className, {
    [styles.container]: true,
    [styles.dark]: dark,
  })

  const year = new Date().getFullYear();


  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <Text className={styles.copy}>&copy; Christy Presler { year }</Text>

        <div className={styles.social}>
          <ExternalLink href='https://www.linkedin.com/in/christy-presler/' className={styles.social_link}>
            <LinkedInIcon className={styles.icon}/>
          </ExternalLink>
          <ExternalLink href='https://github.com/cpresler' className={styles.social_link}>
            <GithubIcon className={styles.icon}/>
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer