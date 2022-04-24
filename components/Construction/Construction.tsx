import classNames from 'classnames'
import styles from './Construction.module.scss'
import Text from '../Text/Text'
import ToolIcon from '../Icons/ToolIcon/ToolIcon'


interface Props {
  className?: string
  dark?: boolean
}

const Construction = ({ className, dark = false }: Props) => {
  const classes = classNames(className, {
    [styles.container]: true,
    [styles.dark]: dark,
  })

  const year = new Date().getFullYear();


  return (
    <div className={styles.content}>
      <Text tag='h2' className={styles.title}>
        Under Construction
      </Text>
      <Text>More coming soon...</Text>
      <div className={styles.construction}>
        <ToolIcon size={40} className={styles.icon}/>
      </div>
    </div>
  )
}

export default Construction