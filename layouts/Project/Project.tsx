import classNames from "classnames"
import styles from './Project.module.scss'


interface Props {
  children: ReactNode
  className?: string
}

const Project = ({ children, className }: Props) => {
  

  const classes = classNames(className, {
    [styles.content]: true,
  })


  return (
    <section className={styles.project}>
      <div className={classes}>
        {children}
      </div>
    </section>
  )
}

export default Project