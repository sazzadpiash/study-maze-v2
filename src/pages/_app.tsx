import Layout from '@/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {


  return <div>

    <Layout><Component {...pageProps} /></Layout>
  </div>
}


