import { profile } from '@/content/profile'
import Reveal from './ui/Reveal'

export default function Contact() {
  return (
    <Reveal>
      <section id="contact" className="scroll-mt-24 pb-24 pt-8 text-center">
        <span className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
          Contact
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-muted">
          Have a repetitive workflow worth automating? Tell me what&apos;s
          eating your team&apos;s week. Email me at{' '}
          <a href={`mailto:${profile.email}`} className="link text-foreground">
            {profile.email}
          </a>{' '}
          and I&apos;ll get back to you.
        </p>
        <p className="mt-16 text-xs text-muted">
          {profile.name} · Delhi, India · Built with Next.js
        </p>
      </section>
    </Reveal>
  )
}
