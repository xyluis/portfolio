const baseColors = {
  'blue-base': '#4263EB',
  'blue-mid': '#364FC7',
  'blue-dark': '#00082F',

  'grey-1': '#FEFEFE',
  'grey-2': '#EDF2FF',
  'white': '#FFFFFF'
}

const aliases = {
  'text-base': baseColors['white'],
  'text-grey-1': baseColors['grey-1'],
  'text-grey-2': baseColors['grey-2'],
  'background': baseColors['blue-dark']
}

export const colors =  { ...baseColors, ...aliases }
