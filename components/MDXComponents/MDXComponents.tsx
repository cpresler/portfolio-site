import styles from './MDXComponents.module.scss';
import Link, { NavLink } from '../Link/Link'
import Project from '../../layouts/Project/Project'
import MetaData from '../MetaData/MetaData'
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Text from '../Text/Text'


// assign custom components/classes to markdown elements
const MDXComponents = {
  p: (props: any) => <p {...props} className={styles.p} />,
  a: (props: any) => <Link {...props} className={styles.link} />,
  h1: (props: any) => <Text tag='h1' {...props} className={styles.pageTitle} />,
  h2: (props: any) => <Text tag='h2' {...props} className={styles.sectionTitle} />,
  h3: (props: any) => <Text tag='h3' {...props} className={styles.subsectionTitle} />,
  Project: (props: any) => <Project {...props} className={styles.project} />,
  MetaData: (props: any) => <MetaData {...props} />,
  ResponsiveImage: (props: any) => <ResponsiveImage {...props} className={styles.img} />,
  Text: (props: any) => <Text {...props} className={styles.featured} />,
  Label: (props: any) => <Text {...props} className={styles.label} />
};

export default MDXComponents;