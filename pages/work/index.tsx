import type { NextPage } from 'next'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import GridContainer from '../../components/GridContainer/GridContainer'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Text from '../../components/Text/Text'
import styles from './Work.module.scss'

export async function getStaticProps() {
  // get projects
  const files = fs.readdirSync('projects')
  
  const projects = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      projects,
    },
  }
}

const Work: NextPage = ({ projects }) => {
  return (
    <section>
      <Head>
        <meta name='description' content='Christy Presler - examples of past projects' />
      </Head>
      <div className={styles.content}>
        <Text tag='h1'>Selected Work</Text>

        <GridContainer>
          {projects.map(({ slug, frontmatter }) => (
            <ProjectCard
              slug={slug}
              image={frontmatter.thumbnail}
              title={frontmatter.title}
              desc={frontmatter.desc}
            />
          ))}
        </GridContainer>
      </div>
    </section>
  )
}

export default Work
