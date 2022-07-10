import Head from 'next/head'
import { User } from '../components/User'
import { Button } from '../components/Button'
import { MainContainer } from '../styles/globals'

import { Box, Buttons, Footer } from '../styles/Home.page'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Luís - Links</title>
        <meta name="description" content="All my links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={MainContainer()}>
        <User />

        <Buttons>
          <Button icon='github' href="https://github.com/xyluis" target="_blank">Github</Button>
          <Button icon='instagram' href="https://instagram.com/xyluiis" target="_blank">Instagram</Button>
          <Button icon='twitter' href="https://twitter.com/xyluiis" target="_blank">Twitter</Button>
          <Button icon='linkedin' href="https://linkedin.com/in/xyluis" target="_blank">Linkedin</Button>
          <Button icon='behance' href="#">Behance</Button>
        </Buttons>

        <Footer>Made with ❤️ by @xyluis</Footer>
      </Box>
    </div>
  )
}
