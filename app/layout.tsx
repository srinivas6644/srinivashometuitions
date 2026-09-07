import { FloatingActions } from '@/components/floating-actions'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Srinivas Home Tuitions',
  description:
    'Srinivas Home Tuitions brings trusted one-to-one home tutoring for school and college learners in Hyderabad, Uppal, Medipally, Ghatkesar and nearby Hyderabad areas.',
  keywords: [
    'home tuition Hyderabad',
    'home tutors Hyderabad',
    'CBSE home tutor Hyderabad',
    'ICSE tutor Hyderabad',
    'private tutor Uppal',
    'Srinivas Home Tuitions',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Srinivas Home Tuitions',
    description:
      'Personalised home tuition for students across Hyderabad and nearby East Hyderabad communities.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#24543a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
