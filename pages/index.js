import Head from 'next/head'
import Nav from '../src/components/navbar/Nav'
import Info from '../src/components/Info'
import Services from '../src/components/Services'
import Earn from '../src/components/Earn'
import Video from '../src/components/Video'
import Ecosystem from '../src/components/Ecosystem'
import Audited from '../src/components/Audited'

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
        <Video/>
        <Ecosystem/>
        <Audited/>
      </main>
      <footer>
      </footer>
    </div>
  )
}
