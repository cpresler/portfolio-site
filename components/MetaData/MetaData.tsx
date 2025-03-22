import Head from 'next/head'

interface Props {
  title?: string
  description?: string

}

const MetaData = ({
  title = 'Christy Presler - Senior Design Engineer',
  description = 'Senior Design Engineer with an insatiable curiosity about human behavior and a deep understanding of technology. I am a designer who implements engineering best practices and an engineer who delivers impeccable user experiences.'
}: Props) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta name='description' content={ description } />
      <meta property='og:image' content='https://christypresler.com/cp-portfolio-ogimage.png' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default MetaData