import './globals.css'

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'

import { mantineTheme } from '@/theme'
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Dzmitry Karaleu blog',
  description: 'Personal blog of Dzmitry Karaleu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" {...mantineHtmlProps} className={geist.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
