import classNames from 'classnames'
import styles from './ProjectCard.module.scss'
import Image from 'next/image'
import Link from '../Link/Link'
import Text from '../Text/Text'
import Button from '../Button/Button'
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage'

interface Props {
  className?: string
  slug: string
  image: string
  title: string
  desc?: string
}

const ProjectCard = ({ className, slug, image, title, desc = '' }: Props) => {
  const classes = classNames(className, {
    [styles.card]: true
  })

  return (
    <div
      key={slug}
      className={classes}
    >
      <Link href={`/work/${slug}`} className={styles.card_link}>
        <ResponsiveImage
          width={480}
          height={360}
          alt={title}
          src={`${image}`}
          className={styles.card_image}
        />
        <div className={styles.card_contents}>
          <div className={styles.card_details}>
            <Text tag='h1' weight='medium' size='m' line='m' className={styles.card_title}>{ title }</Text>
            <Text className={styles.card_desc}>{ desc }</Text>
          </div>
          <Button fullWidth={true} className={styles.card_button}>View Project</Button>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard