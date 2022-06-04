import { styled } from './theme'

export const Wrapper = styled('div', {
  width: '100%',
  height: 'calc(100vh - $20)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@mobile': {
    height: 'auto'
  }
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: '$40',
  py: '$20',
  gap: '$20',

  '@mobile': {
    px: '$10',
    flexDirection: 'column',
  }
})

export const Introduction = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  gap: '$2',

  '@mobile': {
    width: '100%',
  }
})

export const Intro = styled('h1', {
  fontSize: '$6xl',
  textTransform: 'uppercase',

  '@mobile': {
    fontSize: '$4xl'
  }
})

export const Subtitle = styled('p', {
  fontSize: '$lg'
})

export const ImageBox = styled('span', {
  img: {
    width: '100',
    height: 'auto',
    borderRadius: '$md'
  }
})

export const Buttons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: '$4',

  '@mobile': {
    flexDirection: 'column',
    width: '100%',
  },
})

export const Button = styled('button', {
  color: '$black',
  transition: 'all 200ms ease 0s',
  border: 'none',
  width: '100%',
  fontWeight: '$bold',
  borderRadius: '$md',
  backgroundColor: '$white',
  px: '$6',
  py: '$3',
  fontSize: '$sm',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})