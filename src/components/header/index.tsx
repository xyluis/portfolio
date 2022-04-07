import NextLink from 'next/link'

import { Wrapper, Container, Links, Link } from './style'

import Logo from '../ui/logo'

export default function Header (): JSX.Element {
  return (
    <Wrapper>
      <Container className="main-container">
        <NextLink href="/" passHref><a><Logo /></a></NextLink>
        <Links>
          <Link>Sobre</Link>
        </Links>
      </Container>
    </Wrapper>
  )
}