import styles from './MDXComponents.module.scss';
import Link from '../Link/Link'
import Project from '../../layouts/Project/Project'
import MetaData from '../MetaData/MetaData'
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import Text from '../Text/Text'


// assign custom components/classes to markdown elements
const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => <Link {...props} className={styles.link} />,
  h1: (props) => <Text tag='h1' {...props} className={styles.pageTitle} />,
  Project: (props) => <Project {...props} className={styles.project} />,
  MetaData: (props) => <MetaData {...props} />,
  ResponsiveImage: (props) => <ResponsiveImage {...props} className={styles.img} />,
  Text: (props) => <Text {...props} className={styles.featured} />
};

export default MDXComponents;