import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const display = Inter_Tight({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://divineflowdigital.com'),
  title: 'Divine Flow Digital | Strategy + Design That Converts',
  description:
    'Join 100+ businesses using Divine Flow’s strategy, design, and marketing systems to build one aligned digital presence.',
  keywords: [
    'web design',
    'digital marketing',
    'SEO',
    'branding',
    'Saginaw AZ',
    'Divine Flow Method',
  ],
  openGraph: {
    title: 'Divine Flow Digital | Strategy + Design That Converts',
    description: 'Align your brand. Amplify your presence.',
    type: 'website',
    locale: 'en_US',
  },
  icons: { icon: '/assets/Divineflowdigital_logo_.avif' },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
