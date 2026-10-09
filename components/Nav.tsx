'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/content/profile'

const links = [
  { href: '#approach', label: 'Approach' },
  { href: '#principles', label: 'Principles' },
  { href: '#work', label: 'Work' },
  { href: '#shipping', label: 'Shipping' },
  { href: '#experience', label: 'Experience' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for the section crossing the upper-middle band.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#070710]/95 backdrop-blur-md border-b border-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-slate-100 font-semibold tracking-wider"
        >
          {profile.name.split(' ')[0].toLowerCase()}
          <span className="text-indigo-400">
            .{profile.name.split(' ').slice(1).join('').toLowerCase()}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? 'true' : undefined}
                className={`text-sm transition-colors border-b ${
                  isActive
                    ? 'text-slate-100 border-indigo-400'
                    : 'text-slate-400 border-transparent hover:text-slate-100'
                }`}
              >
                {l.label}
              </a>
            )
          })}
          <a
            href={`mailto:${profile.email}`}
            className="text-sm px-4 py-1.5 rounded-lg border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 transition-colors"
          >
            Book a call
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-400 transition-all duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-400 transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-400 transition-all duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 pb-4 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-400 hover:text-slate-100 transition-colors py-2.5 border-b border-slate-800/60"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-3 text-sm text-center px-4 py-2 rounded-lg border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 transition-colors"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  )
}
