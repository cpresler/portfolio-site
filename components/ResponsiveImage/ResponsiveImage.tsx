import classNames from 'classnames'
import styles from './ResponsiveImage.module.scss'
import Image from 'next/image'

interface Props {
  className?: string
  height: number
  width: number
  alt: string
  src: string
  wrapper: boolean
}

const ResponsiveImage = ({ className, height, width, alt, src, wrapper }: Props) => {
  const classes = classNames(className, {});

  const ResImage = () => (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={`/${src}`}
      layout='responsive'
      className={classes}
    />
  );
console.log(`image: ${src} has wrapper: ${wrapper}`);
  if (wrapper) {
    return (
      <div className={styles.wrapper}>
        <ResImage />
      </div>
    )
  }

  return <ResImage />;
}

export default ResponsiveImage