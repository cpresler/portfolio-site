export interface Projects {
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