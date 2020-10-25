// eslint-disable-next-line complexity
export const colorConversion = (colorName: string) => {
  let colorCode = ''

  switch (colorName) {
    case 'colorPalette-steelGrey':
      colorCode = '#6c676e'
      break
    case 'colorPalette-sepia':
      colorCode = '#483c2c'
      break
    case 'colorPalette-brown':
      colorCode = '#6d4c33'
      break
    case 'colorPalette-maroon':
      colorCode = '#800000'
      break
    case 'colorPalette-purple':
      colorCode = '#800080'
      break
    case 'colorPalette-pansy':
      colorCode = '#433171'
      break
    case 'colorPalette-saxeBlue':
      colorCode = '#5a7993'
      break
    case 'colorPalette-orientalBlue':
      colorCode = '#304285'
      break
    case 'colorPalette-cobaltBlue':
      colorCode = '#0062a0'
      break
    case 'colorPalette-ceruleanBlue':
      colorCode = '#0073a2'
      break
    case 'colorPalette-royalBlue':
      colorCode = '#4169e1'
      break
    case 'colorPalette-marineBlue':
      colorCode = '#00526b'
      break
    case 'colorPalette-malachiteGreen':
      colorCode = '#007e4e'
      break
    case 'colorPalette-green':
      colorCode = '#009a57'
      break
    case 'colorPalette-emeraldGreen':
      colorCode = '#00a474'
      break
    case 'colorPalette-grassGreen':
      colorCode = '#737c3e'
      break
    case 'colorPalette-yellowOcher':
      colorCode = '#b8883b'
      break
    case 'colorPalette-deepOrange':
      colorCode = '#e37d00'
      break
    case 'colorPalette-carrotOrange':
      colorCode = '#c55431'
      break
    case 'colorPalette-goldenYellow':
      colorCode = '#e89a3c'
      break
    case 'colorPalette-fireBrick':
      colorCode = '#b22222'
      break
    case 'colorPalette-rose':
      colorCode = '#db3561'
      break
    case 'colorPalette-oldRose':
      colorCode = '#c67a85'
      break
    case 'colorPalette-strawberry':
      colorCode = '#bb004b'
      break
    default:
      break
  }

  return colorCode
}

export default colorConversion
