import { styled } from "../../styles/index";

export const Raw = styled('a', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  justifyContent: 'flex-start',
  boxShadow: '$default',
  border: 'transparent',
  borderRadius: '$md',
  textTransform: 'uppercase',
  fontFamily: '$default',
  fontSize: '$lg',
  fontWeight: '$bold',
  transition: 'filter 0.2s ease 0s, box-shadow 0.2s ease 0s',
  gap: '$2',
  height: '$16',
  px: '$8',
  width: '$80',
  overflow: 'hidden',

  '&:disabled': {
    cursor: 'not-allowed',
    filter: 'brightness(0.6)',
    $$hover: 'transparent'
  },

  backgroundColor: '$blue-base',
  '@hover': {
    '&:hover': {
      /* backgroundColor: '$blue-mid', */
      filter: 'brightness(0.8)'
    }
  },
})

export const Label = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  'img': {
    width: '$5',
    height: 'auto',
    color: '$text-base'
  }
})