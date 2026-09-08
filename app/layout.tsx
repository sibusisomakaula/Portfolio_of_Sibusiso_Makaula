import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { profile } from '@/data/profile'
import './globals.css'

const siteName = `${profile.name} | ICT Application Development Graduate & Junior Software Developer`
const siteDescription =
  'Portfolio of Sibusiso Makaula, an ICT Application Development graduate specializing in Java, Spring Boot, React, Vue.js, MySQL and modern software development.'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  keywords: [
    'Sibusiso Makaula',
    'ICT Application Development',
    'Junior Software Developer',
    'Java',
    'Spring Boot',
    'React',
    'Vue.js',
    'MySQL',
    'Full-Stack Developer',
    'South Africa',
  ],
  openGraph: {
    type: 'website',
    title: siteName,
    description: siteDescription,
    siteName: `${profile.name} Portfolio`,
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfdfc' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable} bg-background`}>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
