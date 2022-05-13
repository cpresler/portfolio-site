import classNames from 'classnames'
import styles from './ResponsiveImage.module.scss'
import Image from 'next/image'

interface Props {
  className?: string
  height: number
  width: number
  alt: string
  src: string
  priority?: boolean
}

const ResponsiveImage = ({ className, height, width, alt, src, priority = false }: Props) => {
  const classes = classNames(className, {
    [styles.img]: true
  })

  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={`/${src}`}
      layout='responsive'
      className={classes}
      priority={priority}
    />
  )
}

export default ResponsiveImage