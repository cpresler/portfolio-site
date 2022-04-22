import React from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface Props {
  className?: string
  children: any
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  primary?: boolean
  small?: boolean
  large?: boolean
  fullWidth?: boolean
  linkType?: string
  href?: string
  grayedOut?: boolean
  type?: string
  standalone?: boolean
}

const Button = ({
  className,
  children,
  onClick,
  primary,
  small,
  large,
  fullWidth,
  linkType,
  href,
  grayedOut,
  type,
  standalone
}: Props) => {
  const classes = classNames(className, {
    [styles.button]: true,
    [styles.isPrimary]: primary,
    [styles.isSmall]: small,
    [styles.isLarge]: large,
    [styles.isFullWidth]: fullWidth,
    [styles.isStandalone]: standalone,
    [styles.isGrayed]: grayedOut,
  })

  if (href !== '') {
    if (linkType === 'external') {
      return <a className={classes} href={href} type={type} target="_blank" rel="noreferrer">{children}</a>
    }

    return <a className={classes} href={href} type={type}>{children}</a>
  }

  if (type === 'submit') {
    return <input type="submit" className={classes} value={children} />
  }

  return (
    <button className={classes} onClick={onClick} type={type === 'button' ? 'button' : undefined} >
      {children}
    </button>
  )

}

Button.defaultProps = {
  type: 'button',
  linkType: 'internal',
  href: ''
}

export default Button