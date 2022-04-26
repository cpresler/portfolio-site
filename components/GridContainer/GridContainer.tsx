import classNames from 'classnames'
import styles from './GridContainer.module.scss'

interface Props {
  className?: string
  children: any
}

const GridContainer = ({ className, children }: Props) => {
  const classes = classNames(className, {
    [styles.grid]: true
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default GridContainer