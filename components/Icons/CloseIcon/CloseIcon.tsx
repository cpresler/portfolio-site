// Icons sourced from https://feathericons.com/
 
import React from 'react'
import classNames from 'classnames'
import styles from './CloseIcon.module.scss'
import BaseIcon from '../BaseIcon/BaseIcon'

interface Props {
  className?: string
  size?: number
  onClick?: any
}

const CloseIcon = ({ className, size, onClick }: Props) => {
  const classes = classNames(className, {
    [styles.close]: true
  })

  return (
    <BaseIcon title="close" onClick={() => onClick()}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </BaseIcon>
  )
}

export default CloseIcon