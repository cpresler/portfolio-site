import React, { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface Props {
  className?: string
  children: ReactNode
  size?: string
  tag?: string
  weight?: string
}

const Text = ({ 
  className,
  children,
  size,
  tag,
  weight,
}: Props) => {
  const classes = classNames(className, {
    [styles.text]: true,
    [styles.size_xs]: size === 'xs',
    [styles.size_sm]: size === 'sm',
    [styles.size_m]: size === 'm',
    [styles.size_l]: size === 'l',
    [styles.size_xl]: size === 'xl',
    [styles.size_xxl]: size === 'xxl',
    [styles.weight_light]: weight === 'light',
    [styles.weight_medium]: weight === 'medium',
    [styles.weight_semibold]: weight === 'semibold',
    [styles.weight_bold]: weight === 'bold',
    [styles.weight_black]: weight === 'black',
  })

  switch (tag) {
    case 'h1':
      return <h1 className={classes}>{children}</h1>
      break
    case 'h2':
      return <h2 className={classes}>{children}</h2>
      break
    case 'h3':
      return <h3 className={classes}>{children}</h3>
      break
    case 'h4':
      return <h4 className={classes}>{children}</h4>
      break
    case 'h5':
      return <h5 className={classes}>{children}</h5>
      break
    case 'h6':
      return <h1 className={classes}>{children}</h1>
      break
    case 'span':
      return <span className={classes}>{children}</span>
      break
    case 'IncludeNewLines':
      return <p style={{ whiteSpace: 'pre-wrap'}} className={classes}>{children}</p>
      break
    default:
      return <p className={classes}>{children}</p>
  }
}

Text.defaultProps = {
  tag: 'p',
}

export default Text