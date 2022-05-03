import Head from 'next/head'

interface Props {
  title?: string
  description?: string

}

const MetaData = ({
  title = 'Christy Presler - Senior Design Technologist',
  description = 'Senior Design Technologist/UX Engineer with an insatiable curiosity about human behavior and a deep understanding of technology. I am a designer who implements engineering best practices and an engineer who delivers impeccable user experiences.'
}: Props) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name='description' content={ description } />
      {/* TODO: replace favicon */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default MetaData