import type { NextPage} from 'next'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Text from '../../components/Text/Text'
import styles from './Project.module.scss'

export async function getStaticPaths() {
  // get all the project paths
  const files = fs.readdirSync('projects')
  const paths = files.map((fileName) => ({
    params: {
      project: fileName.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { project } }) {
  // get project data
  const fileName = fs.readFileSync(`projects/${project}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    }
  }
}

const ProjectPage: NextPage = ({ frontmatter, content }) => {
  return (
    <section>
      <Head>
        <title>{ frontmatter.title } - Christy Presler</title>
        <meta name='description' content={ frontmatter.desc } />
      </Head>

      <div className={styles.content}>
        <Text tag='h1'>{ frontmatter.title }</Text>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </section>
  )
}

export default ProjectPage