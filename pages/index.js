import Head from 'next/head'
import Nav from '../src/components/navbar/Nav'
import Info from '../src/components/Info'
import Services from '../src/components/Services'
import Earn from '../src/components/Earn'

export default function Home() {
  return (
    <div id="container">
      <Head>
        <title>Harvest</title>
        {/* <meta name="description" content="" />
        <link rel="icon" href="" /> */}
      </Head>
      <Nav/>
      <main>
        <Info/>
        <Services/>
        <Earn/>
      </main>
      <footer>
      </footer>
    </div>
  )
}
