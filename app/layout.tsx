import './globals.css'

import { Roboto } from '@next/font/google'
import { ReactNode } from 'react'

import { Providers } from './Providers'

const roboto = Roboto({ weight: ['300', '400', '500', '700'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  // const enableFirebase = Number(process.env.NEXT_PUBLIC_ENABLE_FIREBASE)

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
