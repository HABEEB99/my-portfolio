import Head from 'next/head'
import About from '../components/about/About'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <div className="bg-body h-[1000vh]  w-screen mx-auto items-center">

      <Head>
        <title>HABEEB AHMADU | WEB DEVELOPER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header/>

      <About/>
    </div>
  )
}
