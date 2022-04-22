import classNames from "classnames"
import styles from './Header.module.scss'
import Image from 'next/image'
import Link, { NavLink } from '../Link/Link'

interface Props {
  className?: string
  dark?: boolean
}

const Header = ({ className, dark = false }: Props) => {
  const classes = classNames(className, {
    [styles.container]: true,
    [styles.dark]: dark,
  })

  const linkStyles = classNames({
    [styles.nav_link]: true,
    [styles.light]: dark
  })

  return (
    <div className={classes}>
      <nav className={styles.nav}>
        <NavLink href={'/'} className={styles.logo}>
          <Image src={dark ? '/images/christy-presler-logo-light.svg' : '/images/christy-presler-logo-dark.svg'} width="72" height="72"/>
        </NavLink>

        <ul className={styles.nav_links}>
          <li><NavLink href={'/work'} exact={true} className={linkStyles}>Work</NavLink></li>
          <li><Link href={'/Christy-Presler-resume_2022.pdf'}className={linkStyles} target="_blank">Resume</Link></li>
          <li><NavLink href={'/about'} exact={true} className={linkStyles}>About</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header