import Head from 'next/head'
import Showcase from '../components/home/Home'
import Header from '../components/header/Header'
import About from '../components/about/About'

export default function Home() {
  return (
    <div className="bg-body h-[300vh]  w-screen mx-auto items-center">

      <Head>
        <title>HABEEB AHMADU | WEB DEVELOPER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header/>

      <Showcase/>

      <About/>

    </div>
  )
}
