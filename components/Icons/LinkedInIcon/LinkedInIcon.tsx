// Icons sourced from https://feathericons.com/
 
import React from 'react'
import classNames from 'classnames'
import styles from './LinkedInIcon.module.scss'
import BaseIcon from '../BaseIcon/BaseIcon'

interface Props {
  className?: string
  size?: number
  onClick?: any
}

const LinkedInIcon = ({ className, size, onClick }: Props) => {
  const classes = classNames(className, {
    [styles.icon]: true
  })

  return (
    <BaseIcon title="LinkedIn" onClick={() => onClick()} size={size} className={classes}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </BaseIcon>
  )
}

export default LinkedInIcon