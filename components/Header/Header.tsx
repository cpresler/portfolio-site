import classNames from 'classnames'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link, { NavLink } from '../Link/Link'
import LogoIcon from '../Icons/LogoIcon/LogoIcon'

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
        <NavLink href={'/'} className={`${styles.logo} ${dark ? styles.light : ''}`} noActive={true}>
          <LogoIcon size={72} />
        </NavLink>

        <ul className={styles.nav_links}>
          <li><NavLink href={'/work'} exact={true} className={linkStyles}>Work</NavLink></li>
          <li><NavLink href={'/Christy-Presler-web-resume_2025.pdf'} className={linkStyles} target="_blank">Resume</NavLink></li>
          <li><NavLink href={'/about'} exact={true} className={linkStyles}>About</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header