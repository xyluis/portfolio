import Head from 'next/head'
import Image from 'next/image'

import { Wrapper, Container, Content, Introduction, Intro, Subtitle, ImageBox, Buttons, Button } from '../styles/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>xyLuis</title>
      </Head>

      <Wrapper>
        <Container className="main-container">
          <Content>
            <ImageBox>
              <Image src="http://github.com/xyluis.png" alt="xyLuis avatar" width="200" height="200"/>
            </ImageBox>

            <Introduction>
              <Intro>{'Hey! I\'m Luís'}</Intro>
              <Subtitle>I love pizza, games, movies and travel!</Subtitle>
            </Introduction>
          </Content>

          <Buttons>
            <Button onClick={() => window.open('https://github.com/xyluis', '_blank')}>Github</Button>
            <Button onClick={() => window.open('https://twitter.com/xyluiis', '_blank')}>Twitter</Button>
            <Button onClick={() => window.open('https://instagram.com/xyluiis', '_blank')}>Instagram</Button>
          </Buttons>
        </Container>
      </Wrapper>
    </div>
  )
}
