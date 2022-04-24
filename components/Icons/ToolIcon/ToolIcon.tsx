// Icons sourced from https://feathericons.com/
 
import React from 'react'
import classNames from 'classnames'
import styles from './ToolIcon.module.scss'
import BaseIcon from '../BaseIcon/BaseIcon'

interface Props {
  className?: string
  size?: number
}

const ToolIcon = ({ className, size }: Props) => {
  const classes = classNames(className, {
    [styles.tool]: true
  })

  return (
    <BaseIcon title="tool" size={size} className={classes}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </BaseIcon>
  )
}

export default ToolIcon