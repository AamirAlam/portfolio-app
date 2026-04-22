'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#stats', label: 'Stats' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070710]/90 backdrop-blur-md border-b border-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-sm text-indigo-400 font-medium tracking-wider">
          aamir.eth
        </span>
        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:aamiralam1991@gmail.com"
            className="text-sm px-4 py-1.5 rounded-lg border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 transition-colors"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}
