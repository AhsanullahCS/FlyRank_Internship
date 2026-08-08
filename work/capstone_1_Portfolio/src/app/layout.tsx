import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import AIChatButton from '@/components/ai-assistant/AIChatButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Ahsan Ullah | AI/ML Developer',
  description:
    'AI/ML portfolio of Ahsan Ullah featuring Machine Learning projects, AI applications, and an interactive personal AI assistant.',
  keywords: 'AI, Machine Learning, Deep Learning, Data Science, Python, Portfolio',
  openGraph: {
    title: 'Ahsan Ullah | AI/ML Developer',
    description:
      'AI/ML portfolio of Ahsan Ullah featuring Machine Learning projects, AI applications, and an interactive personal AI assistant.',
    url: 'https://ahsan-portfolio.vercel.app',
    siteName: 'Ahsan Ullah Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-nearWhite text-nearBlack">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AIChatButton />
      </body>
    </html>
  )
}
