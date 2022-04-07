import { globalCss } from './theme'

export const GlobalStyle = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    textDecoration: 'none'
  },

  'body': {
    display: 'block',
    fontSize: '100%',
    fontFamily: '$default',
    textRendering: 'optimizeLegibility',
    backgroundColor: '$black'
  },

  'body, input, textarea, select, button': {
    color: '$text-white'
  },

  'h1, h1, h3, h4, h5, h6, strong': {
    fontFamily: '$default',
    fontWeight: '$bold',
  },

  'h1': {
    fontSize: '$4xl'
  },

  'h2': {
    fontSize: '$2xl'
  },

  '.main-container': {
    width: '100%',
    maxWidth: '1280px',
    px: '$20',
    margin: '0 auto',

    '@mobile': {
      px: '$10'
    }
  },
})