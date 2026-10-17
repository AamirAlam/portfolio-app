'use client'

import { MoonIcon, SunIcon } from './ui/icons'

/**
 * Flips the `dark` class on <html> and remembers the choice. The icon is
 * picked by CSS (`dark:` variants) rather than React state, so the server
 * render always matches whatever theme the inline script in layout.tsx set.
 */
export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      title="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full text-subtle transition-colors hover:bg-secondary hover:text-foreground"
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </button>
  )
}
