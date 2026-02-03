import React from "react"
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _oswald = Oswald({ subsets: ["latin"], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Apolo Lubricantes | Aceites y Lubricantes para Vehículos',
  description: 'Apolo Lubricantes - Distribuidor de aceites de motor, lubricantes y fluidos para motos, autos, camiones y vehículos pesados. Calidad y rendimiento garantizado.',
  keywords: ['lubricantes', 'aceites de motor', 'motos', 'autos', 'camiones', 'grasas', 'refrigerantes'],
  icons: {
    icon: [
      {
        url: '/public/images/logoApolo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/public/images/logoApolo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/public/images/logoApolo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/public/images/logoApolo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_oswald.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
