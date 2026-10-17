import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { profile } from '@/content/profile'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.seo.title,
  description: profile.seo.description,
  keywords: profile.seo.keywords,
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    creator: '@AamirAlam201096',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Dark by default; the inline script below drops `dark` when the visitor
    // has chosen light, before first paint.
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/*
          Runs before first paint: marks that JS is available, which enables
          the scroll-reveal hidden state (.js .section-fade in globals.css),
          and applies a saved light-theme choice. With JS disabled this never
          runs, so content stays visible and the theme stays dark.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='light')d.classList.remove('dark')}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  )
}
