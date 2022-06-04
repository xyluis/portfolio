import Image from 'next/image'
import { useRouter } from 'next/router'

import { Wrapper, Container, Content, Introduction, Intro, Subtitle, ImageBox, Buttons, Button } from '../styles/home'

import SEO from '../components/forward/SEO'

export default function Home(): JSX.Element {
  const router = useRouter()

  function redirectToResume () {
    router.push('/resume.pdf')
  }

  return (
    <>
      <SEO />

      <Wrapper>
        <Container className="main-container">
          <Content>
            <ImageBox>
              <Image src="http://github.com/xyluis.png" alt="xyLuis avatar" width="250" height="250"/>
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
            <Button onClick={() => window.open('https://linkedin.com/in/xyluis', '_blank')}>Linkedin</Button>
            <Button onClick={() => redirectToResume()}>Resume</Button>
          </Buttons>
        </Container>
      </Wrapper>
    </>
  )
}
