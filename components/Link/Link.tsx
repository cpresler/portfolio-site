import React, { HTMLProps, useCallback } from 'react'
import ReactGA from 'react-ga'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
// import { ExternalLinkIcon } from components/Icons
import classNames from 'classnames'
import styles from './Link.module.scss'

function Link({
  href = '#',
  children,
  className,
  ...rest
}: React.PropsWithoutRef<any> & React.RefAttributes<HTMLAnchorElement>): JSX.Element {
  const classes = classNames(className, {
    [styles.link]: true,
  })
  return (
    <NextLink href={href}>
      <a className={classes} {...rest}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link

export function NavLink({
  href = '#',
  exact = false,
  children,
  className,
  light = false,
  noActive = false,
  ...rest
}: React.PropsWithoutRef<any> & React.RefAttributes<HTMLAnchorElement>): JSX.Element {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  const classes = classNames(className, {
    [styles.nav_link]: true,
    [styles.light]: light,
    [styles.active]: isActive && !noActive,
    [styles.noActive]: noActive,
  })

  return (
    <NextLink href={href}>
      <a className={classes} {...rest}>
        {children}
      </a>
    </NextLink>
  )
}

export function ExternalLink({
  target = '_blank',
  href,
  children,
  rel = 'noopener noreferrer',
  className,
  ...rest
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & { href: string}): JSX.Element {
  const classes = classNames(className, {
    [styles.ext_link]: true,
  })
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      // don't prevent default, don't redirect if it's a new tab
      if (target === '_blank' || event.ctrlKey || event.metaKey) {
        ReactGA.outboundLink({ label: href }, () => {
          console.debug('Fired outbound link event', href)
        })
      } else {
        event.preventDefault()
        // send a ReactGA event and then trigger a location change
        ReactGA.outboundLink({ label: href }, () => {
          window.location.href = href
        })
      }
    },
    [href, target]
  )

  return (
    <a
      target={target}
      rel={rel}
      href={href}
      onClick={handleClick}
      className={classes}
      {...rest}
    >
      {/* <ExternalLinkIcon className={styles.icon} /> */}
      {children}
    </a>
  )
}