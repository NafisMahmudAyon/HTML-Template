import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { Router } from 'next/router'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://nafisbd.com/logo.png" />
      </Head>
      <main className="font-['Montserrat'] bg-light dark:bg-dark w-full min-h-screen">
        <Navbar />
        
          <Component key={Router.asPath} {...pageProps} />
        
        <Footer />
      </main>
    </>
  )
}
