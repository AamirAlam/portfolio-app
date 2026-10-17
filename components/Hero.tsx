import Image from 'next/image'
import { profile } from '@/content/profile'
import { MailIcon } from './ui/icons'

const links = [
  { href: profile.links.github, label: 'GitHub' },
  { href: profile.links.x, label: 'Twitter' },
  { href: profile.links.linkedin, label: 'LinkedIn' },
  { href: profile.links.devfolio, label: 'DevFolio' },
]

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-24">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Hi, I&apos;m {profile.name.split(' ')[0]}
          </h1>
          <p className="text-pretty text-base md:text-xl">
            {profile.role}.
            <br />
            {profile.headline}
          </p>
        </div>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={144}
          height={144}
          priority
          className="h-28 w-28 shrink-0 rounded-2xl object-cover grayscale sm:h-36 sm:w-36"
        />
      </div>

      <nav className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-subtle hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href={`mailto:${profile.email}`}
        className="link mt-3 inline-flex items-center gap-2 text-sm text-subtle hover:text-foreground"
      >
        <MailIcon size={14} />
        {profile.email}
      </a>
    </section>
  )
}
