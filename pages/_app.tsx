import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MDXComponents/MDXComponents'
import Layout from '../layouts/AppLayout/AppLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  )
}

export default MyApp
