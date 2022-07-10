import { styled } from '../../styles'

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  gap: '$4'
})

export const Names = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const Name = styled('h1', {
  fontSize: '$5xl'
})

export const Username = styled('span', {
  fontFamily: '$mono',
  color: '$text-grey-2',
  opacity: '0.8'
})