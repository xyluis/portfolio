import {  } from '@stitches/react'

const baseColors = {
  black: '#000000',
  white: '#ffffff',
  'white-alpha': 'rgba(255, 255, 255, 0.16)'
}

const aliases = {
  'text-white': baseColors['white']
}

export const colors =  { ...baseColors, ...aliases }