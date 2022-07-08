
import { theme as defaultTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


// const body = `Jost,${defaultTheme.fonts.body}`
// const heading = `Jost,${defaultTheme.fonts.heading}`
// const mono = `Cousine,${defaultTheme.fonts.mono}`
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const fonts = {
    heading: "iranyekan",
    body: "iranyekan",
    p: "iranyekan"

}
const direction = "rtl"
export const nopaTheme = extendTheme(
  // withDefaultColorScheme({
  //   colorScheme: 'red',
  //   components: ['Button', 'Badge'],
  // }),
  
  // withDefaultColorScheme({
  //   colorScheme: 'blue',
  //   components: ['Button'],
  // }),
  {
  
  // colors: {
  //   "blue": {
  //     "50": "#E5FFFF",
  //     "100": "#B8FFFF",
  //     "200": "#00Baba",
  //     "300": "#00Baba",
  //     "400": "#00Baba",
  //     "500": "#00Baba",
  //     "600": "#00CCCC",
  //     "700": "#009999",
  //     "800": "#006666",
  //     "900": "#003333"
  //   }
  // },
  fonts,
  config,
  colors: {
    brand: {
      bg: '#06020d',
      hero: '#06020d',
      footer: '#0d041e'
    }
  }
})





