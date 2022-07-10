import { styled } from '../styles/index'

export const Box = styled('div', {
  height: '100vh',
  width: '100vw',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$16'
})

export const Buttons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4'
})

export const Footer = styled('span', {
  color: '$text-grey-1',
  fontWeight: '$medium',
  opacity: '0.6'
})