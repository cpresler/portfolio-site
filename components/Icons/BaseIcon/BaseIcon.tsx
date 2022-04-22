import React from 'react'
import classNames from 'classnames'
import styles from './BaseIcon.module.scss'

interface Props {
  children: any
  title: string
  className?: string
  size?: number
  strokeWidth?: number
  fill?: string
  viewbox?: string
  onClick?: any
  dataVal?: string
}

const BaseIcon = ({
  children,
  className,
  size,
  strokeWidth,
  fill,
  viewbox,
  onClick,
  title,
  dataVal,
}: Props) => {
  const classes = classNames(className, {
    [styles.icon]: true
  })

  return(
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewbox}
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-labelledby={title}
      data-val={dataVal}
      onClick={() => onClick()}
    >
      {children}
    </svg>
  )
}

BaseIcon.defaultProps = {
  size: 24,
  strokeWidth: 2,
  fill: "none",
  viewbox: "0 0 24 24",
}

export default BaseIcon