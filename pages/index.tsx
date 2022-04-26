import type { NextPage } from 'next'
import Image from 'next/image'
import ToolIcon from '../components/Icons/ToolIcon/ToolIcon'
import Text from '../components/Text/Text'
import fs from 'fs'
import matter from 'gray-matter'
import Link from '../components/Link/Link'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import GridContainer from '../components/GridContainer/GridContainer'
import styles from './Home.module.scss'

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

const Home: NextPage = ({ projects }) => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <Image
            className={styles.hero_image}
            src={'/images/christy-sm-sq.jpg'}
            width={240}
            height={240}
            layout='responsive'
            sizes='60vw'
            priority={true}
            alt='Headshot portrait of Christy Presler'
          />
          <div className={styles.hero_text}>
            <Text tag='h1'>
              Hello! My name is Christy Presler.
            </Text>
            <Text size='l'>
              I am a designer who implements engineering best practices and an engineer who delivers impeccable user experiences.
            </Text>
          </div>
        </div>
      </section>
      
      <section className={styles.work}>
        <div className={styles.work_content}>
          <Text tag='h2'>
            Selected Work
          </Text>
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
    </>
  )
}

export default Home
