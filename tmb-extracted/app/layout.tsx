import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TMB Entities (Pty) Ltd | Six Industries. One Vision.',
  description:
    'TMB Entities is a diversified South African industrial services group delivering integrated solutions across supply & delivery, engineering, renewable energy, farming, mining, and logistics.',
  keywords:
    'supply and delivery Northern Cape, engineering services Upington, solar installation Northern Cape, mining services South Africa, agricultural services Northern Cape, logistics company South Africa, government suppliers South Africa, industrial services South Africa',
  authors: [{ name: 'TMB Entities (Pty) Ltd' }],
  openGraph: {
    title: 'TMB Entities | Six Industries. One Vision.',
    description:
      'Delivering integrated industrial solutions across South Africa — supply, engineering, renewable energy, farming, mining, and logistics.',
    url: 'https://tmbentities.co.za',
    siteName: 'TMB Entities',
    images: [{ url: '/tmb-logo.png', width: 1200, height: 630, alt: 'TMB Entities' }],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TMB Entities | Six Industries. One Vision.',
    description: 'Diversified industrial services group operating across six strategic divisions in South Africa.',
    images: ['/tmb-logo.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tmbentities.co.za' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} bg-white`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
