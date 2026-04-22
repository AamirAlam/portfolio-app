import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aamir Alam — Senior Full Stack & Web3 Engineer',
  description:
    'Senior Full Stack Engineer with 4.5+ years building high-performance dApps, DeFi protocols, and decentralized systems. ETH India finalist. ETH Istanbul winner.',
  keywords: ['Web3', 'Solidity', 'React', 'Next.js', 'DeFi', 'Smart Contracts', 'Full Stack'],
  authors: [{ name: 'Aamir Alam' }],
  openGraph: {
    title: 'Aamir Alam — Senior Full Stack & Web3 Engineer',
    description: 'Building the decentralized web, one smart contract at a time.',
    url: 'https://aamir-alam.vercel.app',
    siteName: 'Aamir Alam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aamir Alam — Senior Full Stack & Web3 Engineer',
    description: 'Building the decentralized web, one smart contract at a time.',
    creator: '@AamirAlam201096',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
