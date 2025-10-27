import type { Config } from 'tailwindcss'
import theme from './theme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: [theme.fontFamily],
      },
      colors: {
        transparent: theme.TransparentPallete,
        success: theme.GreenPallete,
        primary: theme.PrimaryPallete,
        secondary: theme.SecondaryPallete,
        error: theme.ErrorPallete,
        slate: theme.SlatePallete,
        white: theme.WhitePallete,
        gray: theme.GrayPallete,
      },
      screens: {
        ...theme.Breakpoints,
      },
    },
  },
  plugins: [],
}

export default config
