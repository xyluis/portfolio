import { globalCss, css } from './index'

export const GlobalStyle = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    textDecoration: 'none'
  },

  body: {
    display: 'block',
    fontSize: '100%',
    fontFamily: '$default',
    textRendering: 'geometricPrecision',
    backgroundColor: '$background',
    scrollBehavior: 'smooth',
  },

  'body, input, textarea, select, button, a': {
    color: '$text-base',
    textDecoration: 'none'
  },

  'h1, h1, h3, h4, h5, h6, strong': {
    fontFamily: '$default',
    fontWeight: '$bold',
  },

  h1: {
    fontSize: '$4xl'
  },

  h2: {
    fontSize: '$2xl'
  },

  button: {
    cursor: 'pointer',
    outline: 'none',

    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      outline: 'none'
    }
  },
})

export const MainContainer = css({
  width: '100%',
  maxWidth: '1140px',
  px: '$20',
  margin: '0 auto',

  '@mobile': {
    px: '$10'
  }
})