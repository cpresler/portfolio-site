import styles from './MDXComponents.module.scss';
import Link from '../Link/Link'


// assign custom components/classes to markdown elements
const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} />,
  a: (props) => <Link {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
};

export default MDXComponents;