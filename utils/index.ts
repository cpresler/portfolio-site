import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const projectDirectory = path.join(process.cwd(), 'pages', 'work')

export function getProjects(limit = 0) {
  const files = fs.readdirSync(projectDirectory, { withFileTypes: true })

  const projects = files
    .map((file) => {
      // make sure we are only dealing with mdx files
      if (!file.name.endsWith('.mdx')) return

      const slug = file.name.replace('.mdx', '')

      const filePath = path.join(projectDirectory, file.name)
      const fileContent = fs.readFileSync(filePath, `utf-8`)
      const { data, content } = matter(fileContent)

      return {
        slug,
        data,
        content,
      }
    })
    // filter out non projects and unpublished projects
    .filter((project) => (project && project.data.published))
    // sort projects most recent first
    // @ts-ignore:next-line
    .sort(({ data: a}, { data: b }) => {
      const dateA = a.projectDate
      const dateB = b.projectDate
      
      if (dateA < dateB) {
        return 1
      } else if (dateA > dateB) {
        return -1
      } else {
        return 0
      }
    })

  // optional limit for when we don't want all projects
  if (limit) {
    return projects.filter((project, index) => {
      return index + 1 <= limit
    })
  }

  return projects
}
