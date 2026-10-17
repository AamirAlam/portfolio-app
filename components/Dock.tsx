import { profile } from '@/content/profile'
import ThemeToggle from './ThemeToggle'
import { GitHubIcon, HomeIcon, LinkedInIcon, MailIcon, XIcon } from './ui/icons'

const items = [
  { href: '#top', label: 'Home', icon: <HomeIcon size={18} />, external: false },
  { href: profile.links.github, label: 'GitHub', icon: <GitHubIcon size={18} />, external: true },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: <LinkedInIcon size={17} />, external: true },
  { href: profile.links.x, label: 'X', icon: <XIcon size={16} />, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', icon: <MailIcon size={18} />, external: false },
]

// Floating pill navigation pinned to the bottom of the viewport.
export default function Dock() {
  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mb-4 flex justify-center">
      <div className="pointer-events-auto flex h-14 items-center gap-1 rounded-full border border-border bg-background/90 px-3 shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:shadow-none backdrop-blur">
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center">
            {i === 1 && <span className="mx-1 h-6 w-px bg-border" aria-hidden />}
            <a
              href={item.href}
              aria-label={item.label}
              title={item.label}
              {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
              className="flex h-10 w-10 items-center justify-center rounded-full text-subtle transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.icon}
            </a>
          </span>
        ))}
        <span className="mx-1 h-6 w-px bg-border" aria-hidden />
        <ThemeToggle />
      </div>
    </nav>
  )
}
