// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import './globals.css'

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'

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
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-amber-100">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
