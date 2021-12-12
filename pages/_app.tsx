import '../styles/globals.css'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import client from '../apollo'
import { ApolloProvider } from '@apollo/client'
import NProgress from 'nprogress'
import Router from 'next/router'
import Layout from '../components/Layout'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
export default MyApp
