import './globals.css'

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'

import { mantineTheme } from '@/theme'
import { Funnel_Display } from 'next/font/google'

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Dzmitry Karaleu blog',
  description: 'Personal blog of Dzmitry Karaleu',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" {...mantineHtmlProps} className={funnelDisplay.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
