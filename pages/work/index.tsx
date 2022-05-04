import type { NextPage } from 'next'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import GridContainer from '../../components/GridContainer/GridContainer'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Text from '../../components/Text/Text'
import styles from './Work.module.scss'
import { getProjects } from '../../utils'


// TODO: convert this into a separate type model, so it doesn't have to be repeated
interface Props {
  projects: [
    {
      slug: string
      data: {
        title: string
        desc: string
        thumbnail: string
        tags: Array<string>
        projectDate: string
        published: boolean
      }
      content: string
    }
  ]
}


export async function getStaticProps() {
  // get projects
  const projects = getProjects()

  return {
    props: {
      projects,
    },
  }
}

const Work: NextPage<Props> = ({ projects }) => {
  return (
    <section>
      <Head>
        <meta name='description' content='Christy Presler - examples of past projects' />
      </Head>
      <div className={styles.content}>
        <Text tag='h1'>Selected Work</Text>

        <GridContainer>
          {projects.map(({ slug, data }) => (
            <ProjectCard
              key={slug}
              slug={slug}
              image={data.thumbnail}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </GridContainer>
      </div>
    </section>
  )
}

export default Work
