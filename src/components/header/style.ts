import { styled } from '../../styles/theme'

export const Wrapper = styled('div', {
  width: '100%',
  height: '$20',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '1px solid $white-alpha'
})

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@mobile': {
    justifyContent: 'center',
  }
})

export const Links = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@mobile': {
    display: 'none'
  }
})

export const Link = styled('a', {
  textDecoration: 'none',
  color: '$text-white'
})