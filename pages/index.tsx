import type { NextPage } from 'next'
import Image from 'next/image'
import Text from '../components/Text/Text'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import GridContainer from '../components/GridContainer/GridContainer'
import styles from './Home.module.scss'
import { getProjects } from '../utils'
import { Projects } from '../types/ObjectTypes'


export async function getStaticProps() {
  // get projects
  const projects = getProjects(4)

  return {
    props: {
      projects,
    },
  }
}

const Home: NextPage<Projects> = ({ projects }) => {
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
            alt='Portrait of Christy Presler'
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
    </>
  )
}

export default Home
