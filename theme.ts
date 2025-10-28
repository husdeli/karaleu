import { createTheme, rem } from '@mantine/core'
import colors from 'tailwindcss/colors'

const PrimaryPallete = colors.indigo
const ErrorPallete = colors.red
const SlatePallete = colors.slate
const WhitePallete = colors.white
const GreenPallete = colors.green
const GrayPallete = colors.gray
const SecondaryPallete = colors.indigo
const TransparentPallete = colors.transparent

const Breakpoints = {
  xs: '40rem',
  sm: '48rem',
  md: '64rem',
  lg: '80rem',
  xl: '96rem',
  '2xl': '110rem',
}

type ColorSet = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]

export const fontFamily = 'Geist, Geist Fallback'

export const mantineTheme = createTheme({
  fontFamily: fontFamily,
  headings: {
    fontFamily: 'Geist, Geist Fallback',
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(24),
    xxl: rem(36),
    xxxl: rem(40),
  },
  lineHeights: {
    xs: '1',
    sm: '1.35',
    md: '1.45',
    lg: '1.6',
    xl: '1.65',
  },
  breakpoints: Breakpoints,
  colors: {
    white: Array.from(new Array(10)).map(() => WhitePallete) as ColorSet,
    primary: Object.values(PrimaryPallete) as ColorSet,
    secondary: Object.values(SecondaryPallete) as ColorSet,
    error: Object.values(ErrorPallete) as ColorSet,
    success: Object.values(GreenPallete) as ColorSet,
    slate: Object.values(SlatePallete) as ColorSet,
    gray: Object.values(GrayPallete) as ColorSet,
  },
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  primaryColor: 'primary',
})

export default {
  PrimaryPallete,
  ErrorPallete,
  SlatePallete,
  WhitePallete,
  GreenPallete,
  GrayPallete,
  SecondaryPallete,
  TransparentPallete,
  Breakpoints,
  mantineTheme,
  fontFamily,
}
